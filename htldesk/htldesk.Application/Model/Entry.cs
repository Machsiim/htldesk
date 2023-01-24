using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace htldesk.Application
{
    public class Entry
    {

        #pragma warning disable CS8618
        protected Entry() {}
        #pragma warning restore CS8618
        
        public Entry(Guid accountingAccountGuid, int gegenKonto, decimal haben, decimal soll, DateTime datum)
        {
            this.AccountingAccountGuid = accountingAccountGuid;
            this.GegenKonto = gegenKonto; 
            this.Haben = haben;
            this.Soll = soll; 
            this.Datum = datum;
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; private set; }
        public Guid Guid { get; set; }
        public Guid AccountingAccountGuid { get; set; }
        public int GegenKonto { get; set; }
        public decimal Haben { get; set; }
        public decimal Soll { get; set; }
        public DateTime Datum { get; set; }
    }
}
