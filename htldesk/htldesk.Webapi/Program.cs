using htldesk.Application.Dto;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);
// SpengernewsContext ist der DbContext, der im Application Project angelegt wurde.
// Aktiviere diese Zeile, wenn du den DB Context definiert hat.
builder.Services.AddDbContext<HtldeskContext>(opt =>
    opt.UseMySql(
        builder.Configuration.GetConnectionString("MySql"),
        new MariaDbServerVersion("10.10.2")));

// Wir wollen automatisch nach Controllern im Ordner Controllers suchen.
builder.Services.AddControllers();
// Der Vue.JS Devserver läuft auf einem anderen Port, deswegen brauchen wir diese Konfiguration
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(options =>
        options.AddDefaultPolicy(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
}

// *************************************************************************************************
// APPLICATION
// *************************************************************************************************
builder.Services.AddAutoMapper(typeof(MappingProfile));
var app = builder.Build();
// Leitet http auf https weiter (http Port 5000 auf https Port 5001)
app.UseHttpsRedirection();
if (app.Environment.IsDevelopment())
{
    // Im Development Mode erstellen wir bei jedem Serverstart die Datenbank neu.
    // Aktiviere diese Zeilen, wenn du den DB Context erstellt hat.
        using (var scope = app.Services.CreateScope())
           using (var db = scope.ServiceProvider.GetRequiredService<HtldeskContext>())
           {
            db.Database.EnsureDeleted();
            db.Database.EnsureCreated();
            db.Seed();  // TODO: Implementiere diese Methode im Datenbankcontext.
           }
    app.UseCors();
}

byte[] secret = Convert.FromBase64String(builder.Configuration["Secret"]);
builder.Services
    .AddAuthentication(options => options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(secret),
            ValidateAudience = false,
            ValidateIssuer = false
        };
    });


// Liefert die statischen Dateien, die von VueJS generiert werden, aus.
app.UseStaticFiles();
// Bearbeitet die Routen, für die wir Controller geschrieben haben.
app.MapControllers();
app.MapFallbackToFile("index.html");
app.Run();

