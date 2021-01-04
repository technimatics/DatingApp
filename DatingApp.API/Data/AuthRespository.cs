using DatingApp.API.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public class AuthRespository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRespository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username); //check username if exists

            if (user==null)
            {
                return null;
            }

            if (!(VerifyPasswordHash(password,user.PasswordHash, user.PasswordSalt)))
            {
                return null;
            }

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); //generating hash password
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false; //compare passwords | return false if not matched 
                }
            }
            return true; //return true if matched 
        }

        public async Task<User> Register(User user, string password) 
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt); //for generating hash password

            user.PasswordHash = passwordHash; //adding hash password in userclass
            user.PasswordSalt = passwordSalt; //adding salt password in userclass

            await _context.Users.AddAsync(user); //adding userprofile in database
            await _context.SaveChangesAsync(); //saving changings

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key; //generating salt password
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); //generating hash password
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.Username == username)) 
                return true; //check if username exists or not


            return false;
        }
    }
}
