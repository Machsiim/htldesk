using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public record EntriesDto(
        Guid Guid,
        Guid AccountingAccountGuid,
        int GegenKonto,
        decimal Haben,
        decimal Soll,
        DateTime Datum)
    {
        // Validation Result
    }
}
