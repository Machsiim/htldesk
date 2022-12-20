using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public record UserDto(Guid guid, string name, string email, string password)
    {
           
    }
    
}
