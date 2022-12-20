using AutoMapper;
using htldesk.Application;
using htldesk.Application.Dto;
using htldesk.Application.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace htldesk.Webapi.Controllers
{
    [ApiController]               // Muss bei jedem Controller stehen
    [Route("/api/users")]  // Muss bei jedem Controller stehen
    public class UserController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly HtldeskContext _db;

        public UserController(HtldeskContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }


        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(new string[] { "News 1", "News 2" });
        }

        [HttpGet("{id:int}")]
        public IActionResult GetNewsDetail(int id)
        {
            if (id < 1000) { return NotFound(); }
            return Ok($"News {id}");
        }

        [HttpPost]
        public IActionResult RegisterUser(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto,
            opt => opt.AfterMap((dto, entity) =>
            { }));
            _db.Users.Add(user);
            try { _db.SaveChanges(); }
            catch (DbUpdateException) { return BadRequest(); } // DB constraint violations, ...
            return Ok(_mapper.Map<User, UserDto>(user));
        }

    }
}