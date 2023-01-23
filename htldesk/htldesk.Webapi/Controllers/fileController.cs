using AutoMapper;
using htldesk.Application;
using htldesk.Application.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using htldesk.Application.Model;
using File = htldesk.Application.Model.File;

namespace htldesk.Webapi.Controllers
{
    [ApiController]               // Muss bei jedem Controller stehen
    [Route("/api/files")]  // Muss bei jedem Controller stehen
    public class FileController : ControllerBase
    {
        
        private readonly IConfiguration _config;
        private readonly HtldeskContext _db;
        
        public FileController(HtldeskContext context, IConfiguration config)
        {
            _db = context;
            _config = config;
        }


        [HttpGet("{username:alpha}")]
        public IActionResult GetAllFiles(string username)
        {
            var user = _db.Users.FirstOrDefault(u => u.Username == username);
            if (user is null) return BadRequest();
            List<File> files = new();
            foreach(File f in _db.Files)
            {
                if(f.UserGuid == user.Guid) files.Add(f);
            }
            return Ok(files);
        }

        [HttpGet("{guid:Guid}")]
        public IActionResult GetFile(Guid guid)
        {
            var file = _db.Files.FirstOrDefault(f => f.Guid == guid);
            if (file is null) { return NotFound(); }
            return Ok(file);
        }

        [HttpPost("create")]
        public IActionResult UploadFile(FileDto fileDto)
        {
            var user = _db.Users.FirstOrDefault(u => u.Guid == fileDto.UserGuid);
            if (user is null) return BadRequest();
            var file = new Application.Model.File(fileDto.Name, fileDto.UserGuid);
            _db.Files.Add(file);
            try { _db.SaveChanges(); }
            catch (DbUpdateException) { return BadRequest(); }
            return Ok(file);
        }


        [HttpDelete("{guid:Guid}")]
        public IActionResult DeleteFile(Guid guid)
        {
            var file = _db.Files.FirstOrDefault(f => f.Guid == guid);
            if (file is null) { return NotFound(); }
            _db.Files.Remove(file);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("{guid:Guid}")]
        public IActionResult EditFile(Guid guid, FileDto fileDto)
        {
            var file = _db.Files.FirstOrDefault(f => f.Guid == guid);
            if (file is null) { return NotFound(); }
            file.Name = fileDto.Name;
            _db.Files.Update(file);
            _db.SaveChanges();
            return Ok(file);
        }

    }

}