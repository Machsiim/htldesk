﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application
{
    public class AccountingAccount
    {
        #pragma warning disable CS8618
        protected AccountingAccount() { }
        #pragma warning restore CS8618
        public AccountingAccount(string name, string nachname, string email)
        {
            Name = name;
            Nachname = nachname;
            Email = email;
        }

        public string Name { get; set; }
        public string Nachname { get; set; }
        public string Email { get; set; }

    }
}
