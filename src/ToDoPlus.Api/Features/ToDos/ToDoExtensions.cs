using System;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Features
{
    public static class ToDoExtensions
    {
        public static ToDoDto ToDto(this ToDo toDo)
        {
            return new ()
            {
                ToDoId = toDo.ToDoId,
                Name = toDo.Name,
                Description = toDo.Description,
                IsCompleted = toDo.IsCompleted
            };
        }
        
    }
}
