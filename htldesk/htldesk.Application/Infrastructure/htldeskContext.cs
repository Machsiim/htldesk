using Bogus;
using Bogus.DataSets;
using htldesk.Application.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

public class htldeskContext : DbContext
{
    // TODO: Add your DbSets
    public DbSet<User> Users { get; set; }

    #pragma warning disable CS8618
    public htldeskContext(DbContextOptions<htldeskContext> opt) : base(opt) { }
    #pragma warning restore CS8618

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Additional config
       
        // Generic config for all entities
        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            // ON DELETE RESTRICT instead of ON DELETE CASCADE
            foreach (var key in entityType.GetForeignKeys())
                key.DeleteBehavior = DeleteBehavior.Restrict;

            foreach (var prop in entityType.GetDeclaredProperties())
            {
                // Define Guid as alternate key. The database can create a guid fou you.
                if (prop.Name == "Guid")
                {
                    modelBuilder.Entity(entityType.ClrType).HasAlternateKey("Guid");
                    prop.ValueGenerated = Microsoft.EntityFrameworkCore.Metadata.ValueGenerated.OnAdd;
                }
                // Default MaxLength of string Properties is 255.
                if (prop.ClrType == typeof(string) && prop.GetMaxLength() is null) prop.SetMaxLength(255);
                // Seconds with 3 fractional digits.
                if (prop.ClrType == typeof(DateTime)) prop.SetPrecision(3);
                if (prop.ClrType == typeof(DateTime?)) prop.SetPrecision(3);
            }
        }

    }

    public void Seed()
    {
        Randomizer.Seed = new Random(1039);
        var faker = new Faker("de");

        var users = new Faker<User>("de").CustomInstantiator(f =>
        {
            return new User(
                name: f.Name.LastName(),
                email: $"{f.Name.FirstName()}@htldesk.at",
                password: f.Internet.Password())
            { Guid = f.Random.Guid() };
        })
        .Generate(30)
        .ToList();
        Users.AddRange(users);
        SaveChanges();
    }
}