using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using ToDoPlus.Api.Core;
using ToDoPlus.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ToDoPlus.Api.Features
{
    public class GetToDoById
    {
        public class Request: IRequest<Response>
        {
            public Guid ToDoId { get; set; }
        }

        public class Response: ResponseBase
        {
            public ToDoDto ToDo { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IToDoPlusDbContext _context;
        
            public Handler(IToDoPlusDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new () {
                    ToDo = (await _context.ToDos.SingleOrDefaultAsync(x => x.ToDoId == request.ToDoId)).ToDto()
                };
            }
            
        }
    }
}
