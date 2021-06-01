using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using ToDoPlus.Api.Core;
using ToDoPlus.Api.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Features
{
    public class GetToDos
    {
        public class Request: IRequest<Response> { }

        public class Response: ResponseBase
        {
            public List<ToDoDto> ToDos { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IToDoPlusDbContext _context;

            public Handler(IToDoPlusDbContext context, IHttpContextAccessor httpContextAccessor)
            {
                _context = context;
            }
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {                
                return new () {
                    ToDos = await _context.ToDos
                    .Where(x => x.Context == Program.Context)
                    .Select(x => x.ToDto()).ToListAsync()
                };
            }
            
        }
    }
}
