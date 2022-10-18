using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadorController : ControllerBase
    {
        private Trabajador trabajador = new Trabajador();
        // GET: api/<TrabajadorController>
        [HttpGet]
        public async Task<ActionResult<List<Trabajador>>> Get()
        {
            try
            {
                var entityList = trabajador.get("IDTrabajador,Nacimiento,Contraseña,Rol," +
                    "Nombre,Apellidos,FechaIngreso,TipoPago", "TRABAJADOR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<TrabajadorController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Trabajador>>> Get(int id)
        {
            try
            {
                var entityList = trabajador.get(id.ToString(), "IDTrabajador", "IDTrabajador,Nacimiento,Contraseña,Rol," +
                    "Nombre,Apellidos,FechaIngreso,TipoPago", "TRABAJADOR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<TrabajadorController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TrabajadorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TrabajadorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
