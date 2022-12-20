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
            CreateMap<UserDto, User>();  // ArticleDto --> Article
            CreateMap<User, UserDto>();  // Article --> ArticleDto
        }
    }
}
    