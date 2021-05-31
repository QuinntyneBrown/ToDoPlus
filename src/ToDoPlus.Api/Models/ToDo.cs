using System;

namespace ToDoPlus.Api.Models
{
    public class ToDo
    {
        public Guid ToDoId { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public bool IsCompleted { get; private set; }
        public Context Context { get; private set; } = Context.Personal;

        public ToDo(string name, string description = null)
        {
            Name = name;
            Description = description;
        }

        private ToDo()
        {

        }
    }
}
