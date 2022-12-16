using Bogus.DataSets;
using htldesk.Application;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.ComponentModel.DataAnnotations;

public class AccountingAccount
{

    public AccountingAccount(List<Entry> entries)
    {
        Entries = entries;
    }
#pragma warning disable CS8618
    protected AccountingAccount() { }
#pragma warning restore CS8618

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public Guid Guid { get; set; }
    public List<Entry> Entries { get; set; }

}
