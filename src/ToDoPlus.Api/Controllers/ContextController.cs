using System.Net;
using System.Threading.Tasks;
using ToDoPlus.Api.Features;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ToDoPlus.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContextController
    {
        private readonly IMediator _mediator;

        public ContextController(IMediator mediator)
            => _mediator = mediator;


        [HttpGet(Name = "GetCurrentContextRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetCurrentContext.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetCurrentContext.Response>> GetCurrent()
            => await _mediator.Send(new GetCurrentContext.Request());

        [HttpPut(Name = "UpdateCurrentContextRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateCurrentContext.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpdateCurrentContext.Response>> Update([FromBody] UpdateCurrentContext.Request request)
            => await _mediator.Send(request);


    }
}
