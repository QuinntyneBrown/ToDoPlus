using ToDoPlus.Api.Models;
using ToDoPlus.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ToDoPlus.Api.Data
{
    public class ToDoPlusDbContext: DbContext, IToDoPlusDbContext
    {
        public DbSet<ToDo> ToDos { get; private set; }
        public ToDoPlusDbContext(DbContextOptions options)
            :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ToDoPlusDbContext).Assembly);
        }
        
    }
}
