using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application
{
    internal class accountingAccount
    {

        public accountingAccount(string name, string nachname, string email)
        {
            Name = name;
            Nachname = nachname;
            Email = email;
        }
#pragma warning disable CS8618
        protected accountingAccount() { }
#pragma warning restore CS8618
        public string Name { get; set; }
        public string Nachname { get; set; }
        public string Email { get; set; }





    }
}
