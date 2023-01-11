using AutoMapper;
using htldesk.Application.Dto;
using htldesk.Application.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace htldesk.Webapi.Controllers
{
    [ApiController]        // Muss bei jedem Controller stehen
    [Route("/api/accountingaccounts")]  // Muss bei jedem Controller stehen
    public class AccountingAccountController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly HtldeskContext _db;

        public AccountingAccountController(HtldeskContext db, IMapper mapper, IConfiguration config)
        {
            _db = db;
            _mapper = mapper;
        }

        [HttpGet("{fileGuid:Guid}")]
        public IActionResult GetAccountingAccounts(Guid fileGuid)
        {
            var file = _db.Files.FirstOrDefault(f => f.Guid == fileGuid);
            if (file is null) return BadRequest();
            var accountingAccounts = _db.AccountingAccounts.Where(a => a.FileGuid == file.Guid).ToList();
            return Ok(accountingAccounts);
        }

        [HttpGet("count/{fileGuid:Guid}")]
        public IActionResult CountAccountingAccounts(Guid fileGuid)
        {
            int count = 0;
            var file = _db.Files.FirstOrDefault(f => f.Guid == fileGuid);
            if (file is null) return BadRequest();
            foreach(Application.Model.File f in _db.Files) {
                if (f.Guid == file.Guid) count++; 
            }
            return Ok(count);
        }

        [HttpPost("create")]
        public IActionResult CreateAccountingAccount(AccountingAccountDto accountingAccountDto)
        {
            var file = _db.Files.FirstOrDefault(f => f.Guid == accountingAccountDto.FileGuid);
            if (file is null) return BadRequest();
            var accountingAccount = new AccountingAccount(accountingAccountDto.Name, accountingAccountDto.FileGuid);
            _db.AccountingAccounts.Add(accountingAccount);
            try { _db.SaveChanges(); }
            catch (DbUpdateException) { return BadRequest(); }
            return Ok(accountingAccount);
        }

        [HttpDelete("{guid:Guid}")]
        public IActionResult DeleteAccountingAccount(Guid guid)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(a => a.Guid == guid);
            if (accountingAccount is null) { return NotFound(); }
            _db.AccountingAccounts.Remove(accountingAccount);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("update")]
        public IActionResult UpdateAccountingAccount(AccountingAccountDto accountingAccountDto)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(a => a.Guid == accountingAccountDto.Guid);
            if (accountingAccount is null) { return NotFound(); }
            accountingAccount.Name = accountingAccountDto.Name;
            _db.SaveChanges();
            return Ok();
        }

    }
}
