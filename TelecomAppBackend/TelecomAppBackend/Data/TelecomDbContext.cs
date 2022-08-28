using Microsoft.EntityFrameworkCore;
using TelecomAppBackend.Models;

namespace TelecomAppBackend.Data
{
    public class TelecomDbContext:DbContext
    {
        public TelecomDbContext(DbContextOptions<TelecomDbContext>options):base(options)
        {

        }
        public DbSet<Plan>Plans { get; set; }
        public DbSet<Device> Devices { get; set; }

     

    }
}
