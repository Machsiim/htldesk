using Microsoft.AspNetCore.Mvc;

namespace htldesk.Webapi.Controllers
{
    [ApiController]               // Muss bei jedem Controller stehen
    [Route("/api/files")]  // Muss bei jedem Controller stehen
    public class FileController : ControllerBase
    {

        private readonly HtldeskContext _db;
        
        public FileController(HtldeskContext context)
        {
            _db = context;
        }

        // Reagiert auf GET /api/news
        [HttpGet]
        public IActionResult GetAllFiles()
        {
            var files = _db.Files.ToList();
            return Ok(files);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetFile(int id)
        {
            var file = _db.Files.FirstOrDefault(f => f.Id == id);
            if (file is null) { return NotFound(); }
            return Ok(file);
        }
    }
}