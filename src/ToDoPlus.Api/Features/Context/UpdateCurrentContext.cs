using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ToDoPlus.Api.Core;
using ToDoPlus.Api.Interfaces;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Features
{
    public class UpdateCurrentContext
    {
        public class Request: IRequest<Response> {
            public Context Context { get; set; }
        }

        public class Response: ResponseBase { 

        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IToDoPlusDbContext _context;
        
            public Handler(IToDoPlusDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new () {

                };
            }
            
        }
    }
}
