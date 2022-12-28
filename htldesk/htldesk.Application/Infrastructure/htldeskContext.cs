using Bogus;
using Bogus.DataSets;
using htldesk.Application;
using htldesk.Application.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

public class HtldeskContext : DbContext
{
    // TODO: Add your DbSets
    public DbSet<User> Users => Set<User>();
    public DbSet<File> Files => Set<File>();
    public DbSet<Entry> Entries => Set<Entry>();
    public DbSet<AccountingAccount> AccountingAccounts => Set<AccountingAccount>();

    public HtldeskContext(DbContextOptions<HtldeskContext> opt) : base(opt) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

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

        // Users
        var users = new Faker<User>("de").CustomInstantiator(f =>
        {
            return new User(
                name: f.Name.LastName(),
                email: $"{f.Name.FirstName()}@htldesk.at",
                password: "1111")
            { Guid = f.Random.Guid() };
        })
        .Generate(10)
        .ToList();
        Users.AddRange(users);
        SaveChanges();


        // Files
        var files = new Faker<File>("de").CustomInstantiator(f =>
        {
            return new File(
                name: f.Name.LastName(),
                userGuid: f.Random.Guid())

            { Guid = f.Random.Guid() };
        })
        .Generate(30)
        .ToList();

        List<File> LenzFiles = new List<File>();
        File file1 = new File("LenzFile1", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));
        File file2 = new File("LenzFile2", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));
        File file3 = new File("LenzFile3", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));
        LenzFiles.Add(file1);
        LenzFiles.Add(file2);
        LenzFiles.Add(file3);


        Files.AddRange(files);
        Files.AddRange(LenzFiles);
        SaveChanges();

        // AccountingAccount
        var account = new Faker<AccountingAccount>("de").CustomInstantiator(f =>
        {
            return new AccountingAccount(
                name: f.Name.LastName(),
                fileGuid: f.Random.Guid())
            { Guid = f.Random.Guid() };
        })
        .Generate(30)
        .ToList();
        AccountingAccounts.AddRange(account);
        SaveChanges();

        // Entry
        var entries = new Faker<Entry>("de").CustomInstantiator(f =>
        {
            return new Entry(
                accountingAccountGuid: f.Random.Guid(),
                gegenKonto: f.Random.Guid(),
                haben: f.Random.Int(0, 1000),
                soll: f.Random.Int(0, 1000),
                datum: f.Date.Past())
            { Guid = f.Random.Guid() };
        }).Generate(30).ToList();
        Entries.AddRange(entries);
        SaveChanges();
    }
}