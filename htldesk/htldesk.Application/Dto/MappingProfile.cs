using AutoMapper;
using htldesk.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace htldesk.Application.Dto
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserDto, User>();
            CreateMap<User, UserDto>();
            CreateMap<FileDto, File>();
            CreateMap<File, FileDto>();
            CreateMap<AccountingAccountDto, AccountingAccount>();
            CreateMap<AccountingAccount, AccountingAccountDto>();
            CreateMap<EntriesDto, Entry>();
            CreateMap<Entry, EntriesDto>();

        }
    }
}
    