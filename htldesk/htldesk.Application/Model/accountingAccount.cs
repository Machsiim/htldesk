using Bogus.DataSets;
using htldesk.Application;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.ComponentModel.DataAnnotations;

public class AccountingAccount
{

    public AccountingAccount(string name, Guid fileGuid)
    {
        Name = name;
        FileGuid = fileGuid;
    }
#pragma warning disable CS8618
    protected AccountingAccount() { }
#pragma warning restore CS8618

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public Guid Guid { get; set; }
    public string Name { get; set; }
    public Guid FileGuid { get; set; }
    public List<Entry>? Entries { get; set; }

}
