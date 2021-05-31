using System;

namespace ToDoPlus.Api.Features
{
    public class ToDoDto
    {
        public Guid ToDoId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
