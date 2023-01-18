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
    public class Posting
    {

        #pragma warning disable CS8618
        protected Posting() {}
        #pragma warning restore CS8618

        public Posting(decimal amount, Guid to, Guid from, Guid userGuid, DateTime date)
        {
            Amount = amount;
            To = to;
            From = from;
            Datum = date;
            UserGuid = userGuid;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; private set; }
        public Guid Guid { get; set; }
        public Guid To { get; set; }
        public Guid UserGuid { get; set; }
        public Guid From { get; set; }
        public decimal Amount { get; set; }
        public DateTime Datum { get; set; }
    }
}
