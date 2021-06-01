using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ToDoPlus.Api.Core;
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
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new() {
                    Context = Program.Context
                };
            }
            
        }
    }
}
