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

        // Lenz Files
        List<File> LenzFiles = new List<File>();
        File file1 = new File("LenzFile1", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));
        File file2 = new File("LenzFile2", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));
        File file3 = new File("LenzFile3", Guid.Parse("f07f6ace-c6a7-feb7-5990-7ce38c14bbb1"));

        file1.Guid = Guid.Parse("08daf345-92a9-4401-8e0d-da6705623951");
        file2.Guid = Guid.Parse("08daf345-92a9-4ab8-83e6-db48f1a98c9f");
        file3.Guid = Guid.Parse("08daf345-92a9-4ac1-845e-43b54ed66c3c");

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

        // Lenz AccountingAccounts
        List<AccountingAccount> LenzAccountingAccounts = new List<AccountingAccount>();
        AccountingAccount account1 = new AccountingAccount("LenzAccount1", Guid.Parse("08daf345-92a9-4ab8-83e6-db48f1a98c9f"));
        AccountingAccount account2 = new AccountingAccount("LenzAccount2", Guid.Parse("08daf345-92a9-4ab8-83e6-db48f1a98c9f"));
        AccountingAccount account3 = new AccountingAccount("LenzAccount3", Guid.Parse("08daf345-92a9-4ab8-83e6-db48f1a98c9f"));

        account1.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7");
        account2.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b8");
        account3.Guid = Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b9");

        LenzAccountingAccounts.Add(account1);
        LenzAccountingAccounts.Add(account2);
        LenzAccountingAccounts.Add(account3);
        AccountingAccounts.AddRange(LenzAccountingAccounts);
        SaveChanges();

        // Entry
        var entries = new Faker<Entry>("de").CustomInstantiator(f =>
        {
            return new Entry(
                accountingAccountGuid: f.Random.Guid(),
                gegenKonto: f.Random.Int(0, 1000),
                haben: f.Random.Int(0, 1000),
                soll: f.Random.Int(0, 1000),
                datum: f.Date.Past())
            { Guid = f.Random.Guid() };
        }).Generate(30).ToList();
        Entries.AddRange(entries);
        SaveChanges();

        // Lenz Entries
        List<Entry> LenzEntries = new List<Entry>();
        Entry entry1 = new Entry(Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), 2800, 100, 0, DateTime.Now);
        Entry entry2 = new Entry(Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), 1234, 0, 100, DateTime.Now);
        Entry entry3 = new Entry(Guid.Parse("08daf341-a2c3-4020-8154-4a29c41300b7"), 4312, 100, 0, DateTime.Now);
        LenzEntries.Add(entry1);
        LenzEntries.Add(entry2);
        LenzEntries.Add(entry3);

        Entry entry4 = new Entry(Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), 2344, 100, 0, DateTime.Now);
        Entry entry5 = new Entry(Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), 0887, 0, 100, DateTime.Now);
        Entry entry6 = new Entry(Guid.Parse("08daf341-a2c3-4090-87f9-0524632421cb"), 2344, 100, 0, DateTime.Now);
        LenzEntries.Add(entry4);
        LenzEntries.Add(entry5);
        LenzEntries.Add(entry6);

        Entry entry7 = new Entry(Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), 1523, 100, 0, DateTime.Now);
        Entry entry8 = new Entry(Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), 8765, 0, 100, DateTime.Now);
        Entry entry9 = new Entry(Guid.Parse("08daf341-a2c3-409a-8858-1f14cc6ed832"), 2346, 100, 0, DateTime.Now);
        LenzEntries.Add(entry7);
        LenzEntries.Add(entry8);
        LenzEntries.Add(entry9);

        Entries.AddRange(LenzEntries);
        SaveChanges();
    }
}