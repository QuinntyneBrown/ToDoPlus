using MediatR;
using Microsoft.AspNetCore.Http;
using System.Threading;
using System.Threading.Tasks;
using ToDoPlus.Api.Core;
using ToDoPlus.Api.Interfaces;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Features
{
    public class GetCurrentContext
    {
        public class Request: IRequest<Response> { }

        public class Response: ResponseBase
        {
            public Context Context { get; set; }
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
                return new () {

                };
            }
            
        }
    }
}
