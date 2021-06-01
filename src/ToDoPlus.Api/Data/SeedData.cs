using System;
using System.Collections.Generic;
using System.Linq;
using ToDoPlus.Api.Models;

namespace ToDoPlus.Api.Data
{
    public static class SeedData
    {
        public static void Seed(ToDoPlusDbContext context)
        {
            ToDoConfiguration.Seed(context);
        }

        internal static class ToDoConfiguration
        {
            internal static void Seed(ToDoPlusDbContext context)
            {
                foreach(var toDo in new List<ToDo>()
                {
                    new (Context.Personal, "Shopping"),
                    new (Context.Professional, "Job Interview"),
                    new (Context.Personal, "Exercise")
                })
                {
                    AddIfDoesntExist(toDo);
                }
                void AddIfDoesntExist(ToDo toDo)
                {
                    if(context.ToDos.SingleOrDefault(x => x.Name == toDo.Name) == null)
                    {
                        context.ToDos.Add(toDo);
                        context.SaveChanges();
                    }
                }
            }
        }
    }
}
