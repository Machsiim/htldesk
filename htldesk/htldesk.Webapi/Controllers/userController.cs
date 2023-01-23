using AutoMapper;
using htldesk.Application;
using htldesk.Application.Dto;
using htldesk.Application.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;
using System.Net;
using System.Security.Claims;
using SendGrid;
using SendGrid.Helpers.Mail;


namespace htldesk.Webapi.Controllers
{
    [ApiController]        // Muss bei jedem Controller stehen
    [Route("/api/users")]  // Muss bei jedem Controller stehen
    public class UserController : ControllerBase
    {

        public record CredentialsDto(string username, string password);

        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly HtldeskContext _db;

        public UserController(HtldeskContext db, IMapper mapper, IConfiguration config)
        {
            _db = db;
            _mapper = mapper;
            _config = config;
        }


        //[HttpGet]
        //public IActionResult GetAllUsers()
        //{
        //    return Ok(new string[] { "News 1", "News 2" });
        //}

        [HttpGet("{username:alpha}")]
        public IActionResult GetNewsDetail(string username)
        {
            var user = _db.Users.FirstOrDefault(u => u.Username == username);
            if (user is null) return BadRequest();
            user.Id = 0;
            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser(UserDto userDto)
        {
            var user = new User(userDto.Username, userDto.Email, userDto.Password);
            user.IsVerified = false;
            var user2 = _db.Users.FirstOrDefault(u => u.Username == user.Username);
            if (user2 is not null) return BadRequest();
            //create verification token
            user.VerificationToken = Guid.NewGuid().ToString();
            //store in memory
             _db.Add(user);
             await _db.SaveChangesAsync();
            //send verification email
            // Use the SendGrid library to send the email
            string apikey = System.Environment.GetEnvironmentVariable("SENDGRID_API_KEY", EnvironmentVariableTarget.Machine);
            var client = new SendGridClient(apikey);

            var from = new EmailAddress("fis22360@spengergasse.at", "HTL Desk");
            var to = new EmailAddress(userDto.Email);
            var subject = "Verification Email";
            var plainTextContent = "Please click on the following link to verify your email address: https://localhost:5001/api/users/verify?token=" + user.VerificationToken;
            var htmlContent = "<p>Please click on the following link to verify your email address: <a href='https://localhost:5001/api/users/verify?token=" + user.VerificationToken + "'>Verify</a></p>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

            var response = await client.SendEmailAsync(msg);

            if (response.StatusCode != HttpStatusCode.Accepted)
            {
                // An error occurred
                throw new Exception("Failed to send verification email");
            }
            user.Id = 0;
            return Ok(user);
        }

        [HttpGet("verify")]
        public async Task<IActionResult> VerifyEmail(string token)
        {
            var user = _db.Users.FirstOrDefault(u => u.VerificationToken == token);
            if (user is null) return BadRequest();
            user.IsVerified = true;
            user.VerificationToken = null;
            _db.Update(user);
            await _db.SaveChangesAsync();
            return Redirect("https://localhost:5001/VerificationS");
        }
        
        
        [HttpPost("login")]
        public IActionResult Login([FromBody] CredentialsDto credentials)
        {
            // Read the secret from appsettings.json via IConfiguration
            // This is NOT the salt of the user password! It is the key to sign the JWT, so
            // the client cannot manupulate our token.
            var secret = Convert.FromBase64String(_config["Secret"]);
            var lifetime = TimeSpan.FromHours(3);
            // User exists in our database and the calculated hash matches
            // the password hash in the database?
            var user = _db.Users.FirstOrDefault(a => a.Username == credentials.username);
            if (user is null) { return Unauthorized(); }
            if (!user.CheckPassword(credentials.password)) { return Unauthorized(); }

            string role = "Admin";  // TODO: Set your role based on your rules.
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                // Payload for our JWT.
                Subject = new ClaimsIdentity(new Claim[]
                {
                // Write username to the claim (the "data zone" of the JWT).
                new Claim(ClaimTypes.Name, user.Username.ToString()),
                // Write the role to the claim (optional)
                new Claim(ClaimsIdentity.DefaultRoleClaimType, role)
                }),
                Expires = DateTime.UtcNow + lifetime,
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(secret),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            // Return the token so the client can save this to send a bearer token in the
            // subsequent requests.
            return Ok(new
            {
                user.Username,
                UserGuid = user.Guid,
                Role = role,
                Token = tokenHandler.WriteToken(token)
            });
        }

        /// <summary>
        /// GET /api/user/me
        /// Gets information about the current (authenticated) user.
        /// </summary>
        [Authorize]
        [HttpGet("me")]
        public IActionResult GetUserdata()
        {
            // No username is set in HttpContext? Should never occur because we added the
            // Authorize annotation. But the properties are nullable, so we have to check.
            var username = HttpContext?.User.Identity?.Name;
            if (username is null) { return Unauthorized(); }

            // Valid token, but no user match in the database (maybe deleted by an admin
            var user = _db.Users.FirstOrDefault(a => a.Username == username);
            if (user is null) { return Unauthorized(); }
            return Ok(new
            {
                user.Username,
                user.Email

            });
        }

        /// <summary>
        /// GET /api/user/all
        /// List all users.
        /// Only for users which has the role admin in the claim of the JWT.
        /// </summary>
        [Authorize(Roles = "Admin")]
        [HttpGet("all")]
        public IActionResult GetAllUsers()
        {
            var user = _db.Users
                .Select(a => new
                {
                    a.Username,
                    a.Email
                })
                .ToList();
            if (user is null) { return BadRequest(); }
            return Ok(user);
        }

    }
}