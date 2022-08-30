using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using TelecomAppBackend.Data;

namespace TelecomAppBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    policy =>
                    {
                        policy.AllowAnyOrigin();
                        policy.AllowAnyMethod();
                        policy.AllowAnyHeader();
                    });
            });
            // Add services to the container.
            builder.Services.AddDbContext<TelecomDbContext>(options =>
            {
                options.UseSqlServer("Data Source=LAPTOP-UI5FPSOQ;Initial Catalog=TelecomDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            });

            builder.Services.AddControllers();

            builder.Services.AddAuthorization();

            builder.Services.AddBff();

            JwtSecurityTokenHandler.DefaultMapInboundClaims = false;

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultScheme = "Cookies";
                options.DefaultChallengeScheme = "oidc";
                options.DefaultSignOutScheme = "oidc";
            })
            .AddCookie("Cookies")
            .AddOpenIdConnect("oidc", options =>
            {
                options.Authority = "https://localhost:7238";

                options.ClientId = "bff";
                options.ClientSecret = "secret";
                options.ResponseType = "code";

                options.Scope.Add("api1");

                options.SaveTokens = true;
                options.GetClaimsFromUserInfoEndpoint = true;
            });
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowAll");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();

            app.UseBff();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapBffManagementEndpoints();
            });

            app.MapControllers();

            app.Run();
        }
    }
}