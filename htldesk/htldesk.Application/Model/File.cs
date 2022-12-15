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
        public File(string name, string path, accountingAccount[] filecontent)
        {
            Name = name;
            Path = path;
            FileContent = filecontent;

        }
        #pragma warning disable CS8618
        protected File() { }
        #pragma warning restore CS8618s
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Guid { get; private set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public accountingAccount[] FileContent { get; set; }
        
        [MaxLength(260)]
        public string Path { get; set; }

    }
}
