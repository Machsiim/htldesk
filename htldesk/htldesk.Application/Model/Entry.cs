using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application
{
    public class Entry
    {

        #pragma warning disable CS8618
        protected Entry() {};
        #pragma warning restore CS8618
        
        public Entry(accountingAccount gegen, decimal haben, decimal soll, DateTime datum)
        {
            this.GegenKonto = gegen; 
            this.Haben = haben;
            this.Soll = soll; 
            this.Datum = datum;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EntryId { get; private set; }
        public accountingAccount GegenKonto { get; set; }
        public decimal Haben { get; set; }
        public decimal Soll { get; set; }
        public DateTime Datum { get; set; }
    }
}
