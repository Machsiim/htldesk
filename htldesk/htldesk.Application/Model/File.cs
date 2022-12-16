using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Model
{
    public class File
    {
        public File(string name, string path)
        {
            Name = name;
            Path = path;

        }
        #pragma warning disable CS8618
        protected File() { }
        #pragma warning restore CS8618

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; private set; }
        public Guid Guid { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public List<AccountingAccount> FileContent { get; private set; } = new();

        [MaxLength(260)]
        public string Path { get; set; }

    }
}
