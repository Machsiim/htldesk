using AutoMapper;
using htldesk.Application;
using htldesk.Application.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace htldesk.Webapi.Controllers
{
    [ApiController]        // Muss bei jedem Controller stehen
    [Route("/api/entries")]  // Muss bei jedem Controller stehen

    public class PostingController : ControllerBase
    {

        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly HtldeskContext _db;

        public PostingController(HtldeskContext context, IConfiguration config, IMapper mapper)
        {
            _db = context;
            _config = config;
            _mapper = mapper;
        }

        [HttpGet("{guid:Guid}")]
        public IActionResult GetEntrie(Guid guid)
        {
            return Ok(_db.Postings.Where(p => p.Guid == guid));
        }

        [HttpGet("")]
        public IActionResult GetEntries(Guid guid)
        {
            return Ok(_db.Postings.Where(p => p.Guid == guid));
        }

        [HttpGet("count/{guid:Guid}")]
        public IActionResult GetEntriesCount(Guid guid)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(f => f.Guid == guid);
            if (accountingAccount is null) { return NotFound(); }
            var entries = _db.Postings.Where(e => e.UserGuid == accountingAccount.Guid).ToList();
            var entriesDto = _mapper.Map<List<PostingDto>>(entries);
            return Ok(entriesDto.Count);
        }

        [HttpPost("upload")]
        public IActionResult UploadEntries(PostingDto entriesDto)
        {
            var entry = _mapper.Map<Posting>(entriesDto);
            _db.Postings.Add(entry);
            try { _db.SaveChanges(); }
            catch (DbUpdateException) { return BadRequest(); }
            return Ok(entry);
        }

        [HttpDelete("{guid:Guid}")]
        public IActionResult DeleteEntries(Guid guid)
        {
            var entry = _db.Postings.FirstOrDefault(e => e.Guid == guid);
            if (entry is null) { return NotFound(); }
            _db.Postings.Remove(entry);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("{guid:Guid}")]
        public IActionResult EditEntries(Guid guid, PostingDto postingDto)
        {
            var entry = _db.Postings.FirstOrDefault(e => e.Guid == guid);
            if (entry is null) { return NotFound(); }
            entry.Amount = postingDto.Amount;
            entry.Datum = postingDto.Datum;
            entry.From = postingDto.From;
            entry.To = postingDto.To;
            entry.UserGuid = postingDto.UserGuid;
            _db.SaveChanges();
            return Ok();
        }
    }
}
