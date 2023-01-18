using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public record PostingDto(
        Guid Guid,
        Guid To,
        Guid From,
        Guid UserGuid,
        decimal Amount,
        DateTime Datum)
    {
        // Validation Result
    }
}
