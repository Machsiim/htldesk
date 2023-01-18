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
    public DbSet<Posting> Postings => Set<Posting>();
    public DbSet<Account> AccountingAccounts => Set<Account>();

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


        // Accounts
        var account = new Faker<Account>("de").CustomInstantiator(f =>
        {
            return new Account(
                name: f.Name.LastName(),
                userGuid: f.Random.Guid())
            { Guid = f.Random.Guid() };
        })
        .Generate(30)
        .ToList();
        AccountingAccounts.AddRange(account);
        SaveChanges();

        // Lenz AccountingAccounts
        List<Account> LenzAccountingAccounts = new List<Account>();
        Account account1 = new Account("LenzAccount1", Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"));
        Account account2 = new Account("LenzAccount2", Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"));
        Account account3 = new Account("LenzAccount3", Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"));
        
        account1.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7");
        account2.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b8");
        account3.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b9");

        LenzAccountingAccounts.Add(account1);
        LenzAccountingAccounts.Add(account2);
        LenzAccountingAccounts.Add(account3);
        AccountingAccounts.AddRange(LenzAccountingAccounts);
        SaveChanges();

        // Postings
        var entries = new Faker<Posting>("de").CustomInstantiator(f =>
        {
            return new Posting(
                from: f.Random.Guid(),
                to: f.Random.Guid(),
                amount: f.Random.Int(0, 1000),
                userGuid: f.Random.Guid(),
                date: f.Date.Past())
            { Guid = f.Random.Guid() };
        }).Generate(30).ToList();
        Postings.AddRange(entries);
        SaveChanges();

        // Lenz Postings
        List<Posting> LenzEntries = new List<Posting>();
        Posting entry1 = new Posting(321, Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        Posting entry2 = new Posting(123, Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        Posting entry3 = new Posting(231, Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        LenzEntries.Add(entry1);
        LenzEntries.Add(entry2);
        LenzEntries.Add(entry3);

        Posting entry4 = new Posting(421, Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        Posting entry5 = new Posting(523, Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        Posting entry6 = new Posting(868, Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        LenzEntries.Add(entry4);
        LenzEntries.Add(entry5);
        LenzEntries.Add(entry6);

        Posting entry7 = new Posting(326, Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);   
        Posting entry8 = new Posting(945, Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        Posting entry9 = new Posting(111, Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), DateTime.Now);
        LenzEntries.Add(entry7);
        LenzEntries.Add(entry8);
        LenzEntries.Add(entry9);

        Postings.AddRange(LenzEntries);
        SaveChanges();
    }
}