using AutoMapper;
using htldesk.Application.Dto;
using htldesk.Application.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace htldesk.Webapi.Controllers
{
    [ApiController]        // Muss bei jedem Controller stehen
    [Route("/api/accounts")]  // Muss bei jedem Controller stehen
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
        public IActionResult GetAccountingAccounts(Guid userGuid)
        {
            var accountingAccounts = _db.AccountingAccounts.Where(a => a.UserGuid == userGuid);
            return Ok(accountingAccounts);
        }

        [HttpGet("count/{fileGuid:Guid}")]
        public IActionResult CountAccountingAccounts(Guid userGuid)
        {
            int count = 0;
            var user = _db.Users.FirstOrDefault(u => u.Guid == userGuid);
            foreach (Account a in _db.AccountingAccounts)
            {
                if (a.UserGuid == userGuid) count++;
            }
            return Ok(count);
        }

        [HttpPost("create")]
        public IActionResult CreateAccountingAccount(AccountDto accountingAccountDto)
        {
            var accountingAccount = new Account(accountingAccountDto.Name, accountingAccountDto.UserGuid);
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
        public IActionResult UpdateAccountingAccount(AccountDto accountingAccountDto)
        {
            var accountingAccount = _db.AccountingAccounts.FirstOrDefault(a => a.Guid == accountingAccountDto.Guid);
            if (accountingAccount is null) { return NotFound(); }
            accountingAccount.Name = accountingAccountDto.Name;
            _db.SaveChanges();
            return Ok();
        }

    }
}
