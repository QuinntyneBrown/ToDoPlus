using System.Linq;

namespace ToDoPlus.Api.Extensions
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Page<T>(this IQueryable<T> queryable, int pageIndex, int pageSize)
            => queryable.Skip(pageSize * pageIndex).Take(pageSize);
    }
}
