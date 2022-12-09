using System;
using System.Collections.Generic;
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
        public string Name { get; set; }
        public int Id { get; private set; }
        public accountingAccount[] FileContent { get; set; }

        public string Path { get; set; }
    }
}
