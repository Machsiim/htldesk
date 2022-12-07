using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Webapi.Model
{
    internal class User
    {
        protected User() { }

        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
        }
        
        [Key]
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
