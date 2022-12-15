using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application
{
    public class AccountingAccount
    {
        
        public AccountingAccount(string name, string nachname, string email)
        {
            Name = name;
            Nachname = nachname;
            Email = email;
        }
        #pragma warning disable CS8618
        protected AccountingAccount() { }
        #pragma warning restore CS8618
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Nachname { get; set; }
        public string Email { get; set; }

    }
}
