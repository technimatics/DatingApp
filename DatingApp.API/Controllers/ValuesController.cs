using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    //http://localhost:5000/api/values
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController :ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;
        }
        //Get api/values
        [HttpGet]
        public async Task<IActionResult> GetValue()
        {
            //throw new Exception("Test Exception");
            var values = await _context.Values.ToListAsync();

            return Ok(values);  //return HTTP 200 response 
        }

        //Get api/values/5
        [HttpGet("{id}")]

        public async Task<IActionResult> Getvalue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x=> x.Id == id);
            return Ok(value);
        }

        //Post api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        //put api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }
        //delete api/values
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            
        }
    }
}