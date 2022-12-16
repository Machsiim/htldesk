using Microsoft.AspNetCore.Mvc;

namespace htldesk.Webapi.Controllers
{
    [ApiController]               // Muss bei jedem Controller stehen
    [Route("/api/users")]  // Muss bei jedem Controller stehen
    public class userController : ControllerBase
    {

        private readonly HtldeskContext _context;
        
        public userController(HtldeskContext context)
        {
            _context = context;
        }

        // Reagiert auf GET /api/news
        [HttpGet]
        public IActionResult GetAllNews()
        {
            return Ok(new string[] { "News 1", "News 2" });
        }
        // Reagiert z. B. auf /api/news/14
        [HttpGet("{id:int}")]
        public IActionResult GetNewsDetail(int id)
        {
            if (id < 1000) { return NotFound(); }
            return Ok($"News {id}");
        }
    }
}