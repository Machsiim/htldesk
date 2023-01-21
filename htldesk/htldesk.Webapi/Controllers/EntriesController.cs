using AutoMapper;
using htldesk.Application;
using htldesk.Application.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace htldesk.Webapi.Controllers
{
    [ApiController]        // Muss bei jedem Controller stehen
    [Route("/api/entries")]  // Muss bei jedem Controller stehen

    public class EntriesController : ControllerBase
    {

        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly HtldeskContext _db;

        public EntriesController(HtldeskContext context, IConfiguration config, IMapper mapper)
        {
            _db = context;
            _config = config;
            _mapper = mapper;
        }

        [HttpGet("{guid:Guid}")]
        public IActionResult GetEntries(Guid guid)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(f => f.Guid == guid);
            if (accountingAccount is null) { return NotFound(); }
            var entries = _db.Entries.Where(e => e.AccountingAccountGuid == accountingAccount.Guid).ToList();
            var entriesDto = _mapper.Map<List<EntriesDto>>(entries);
            return Ok(entriesDto);
        }

        [HttpGet("count/{guid:Guid}")]
        public IActionResult GetEntriesCount(Guid guid)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(f => f.Guid == guid);
            if (accountingAccount is null) { return NotFound(); }
            var entries = _db.Entries.Where(e => e.AccountingAccountGuid == accountingAccount.Guid).ToList();
            var entriesDto = _mapper.Map<List<EntriesDto>>(entries);
            return Ok(entriesDto.Count);
        }

        [HttpPost("create")]
        public IActionResult UploadEntries(EntriesDto entriesDto)
        {
            var entry = _mapper.Map<Entry>(entriesDto);
            _db.Entries.Add(entry);
            try { _db.SaveChanges(); }
            catch (DbUpdateException) { return BadRequest(); }
            return Ok(entry);
        }

        [HttpDelete("{guid:Guid}")]
        public IActionResult DeleteEntries(Guid guid)
        {
            var entry = _db.Entries.FirstOrDefault(e => e.Guid == guid);
            if (entry is null) { return NotFound(); }
            _db.Entries.Remove(entry);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("{guid:Guid}")]
        public IActionResult EditEntries(Guid guid, EntriesDto entriesDto)
        {
            var entry = _db.Entries.FirstOrDefault(e => e.Guid == guid);
            if (entry is null) { return NotFound(); }
            entry.AccountingAccountGuid = entriesDto.AccountingAccountGuid;
            entry.Datum = entriesDto.Datum;
            entry.GegenKonto = entriesDto.GegenKonto;
            entry.Haben = entriesDto.Haben;
            entry.Soll = entriesDto.Soll;
            _db.SaveChanges();
            return Ok();
        }
    }
}
