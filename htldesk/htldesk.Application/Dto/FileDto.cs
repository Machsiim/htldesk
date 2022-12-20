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

        [StringLength(255, MinimumLength = 3, ErrorMessage = "Die Länge des Namens ist ungültig.")]
        string Username,

        [StringLength(255, MinimumLength = 3, ErrorMessage = "Die Länge der Email ist ungültig."), DataType(DataType.EmailAddress)]
        string Email,

        string Password)
    {

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            // We have registered SpengernewsContext in Program.cs in ASP.NET core. So we can
            // get this service to access the database for further validation.
            var db = validationContext.GetRequiredService<HtldeskContext>();
            if (db.Users.Any(u => u.Username == Username))
            {
                yield return new ValidationResult("Username already exists.", new[] { nameof(Username) });
            }
        }

    }

}
