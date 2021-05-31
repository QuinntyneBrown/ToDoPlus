using System.Collections.Generic;

namespace ToDoPlus.Api.Core
{
    public class ResponseBase
    {
        public List<string> ValidationErrors { get; set; }
    }
}
