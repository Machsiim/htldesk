using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public record AccountingAccountDto(
    
        Guid Guid,

        [StringLength(255, MinimumLength = 1, ErrorMessage = "Die Länge des Namens ist ungültig.")]
        string Name,
        
        Guid FileGuid)
    {
        // Validation Result bewusst ausgelassen 
    }
}
  