using System;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Features
{
    public class ToDoDto
    {
        public Guid ToDoId { get; set; }
        public Context Context { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
