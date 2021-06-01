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
            private readonly IHttpContextAccessor _httpContextAccessor;
        
            public Handler(IToDoPlusDbContext context, IHttpContextAccessor httpContextAccessor)
            {
                _context = context;
                _httpContextAccessor = httpContextAccessor;
            }
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                _httpContextAccessor.HttpContext.Request.Headers.TryGetValue(Constants.ContextHeader, out StringValues value);

                var context = !string.IsNullOrEmpty($"{value}") ?
                    (Context)Enum.Parse(typeof(Context), $"{value}")
                    : Context.Personal;

                return new () {
                    ToDos = await _context.ToDos
                    .Where(x => x.Context == context)
                    .Select(x => x.ToDto()).ToListAsync()
                };
            }
            
        }
    }
}
