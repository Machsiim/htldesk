using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public record FileDto(
        Guid Guid,

        [StringLength(50, MinimumLength = 3, ErrorMessage = "Die Länge des Namens ist ungültig.")]
        string Name,

        Guid UserGuid)
    {

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var db = validationContext.GetRequiredService<HtldeskContext>();
            if (db.Files.Any(f => f.UserGuid == this.UserGuid && f.Name == Name))
            {
                yield return new ValidationResult("File already exists.", new[] { nameof(Name) });
            }
        }

    }

}
