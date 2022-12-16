using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Model
{

    [Index(nameof(Email), IsUnique = true)]

    public class User
    {
        #pragma warning disable CS8618
        protected User() { }
        #pragma warning restore CS8618

        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; private set; }
        public Guid Guid { get; set; }
        public string Name { get; set; }
        [MaxLength(25)]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
