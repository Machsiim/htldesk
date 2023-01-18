using Bogus.DataSets;
using htldesk.Application;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.ComponentModel.DataAnnotations;

public class Account
{

    public Account(string name, Guid userGuid)
    {
        Name = name;
        UserGuid = userGuid;
    }
#pragma warning disable CS8618
    protected Account() { }
#pragma warning restore CS8618

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public Guid Guid { get; set; }
    public Guid UserGuid { get; set; }
    public string Name { get; set; }

}
