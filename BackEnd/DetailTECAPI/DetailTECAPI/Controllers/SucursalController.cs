using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SucursalController : ControllerBase
    {
        Sucursal sucursal = new Sucursal();
        
        // GET: api/<SucursalçController>
        [HttpGet]
        public async Task<ActionResult<List<Sucursal>>> Get()
        {



            try
            {
                var entityList = sucursal.get("NombreSuc, FechaApert, Telefono, Provincia, Cannton, San Jose", "LAVADO");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }

        }

        // GET api/<SucursalçController>/5
        [HttpGet("{nombreJur}")]
        public async Task<ActionResult<List<Sucursal>>> Get(int nambreNum)
        {
            try
            {
                var clienteList = sucursal.get(nambreNum.ToString(), "IDcliente", "IDcliente,Usuario,Contraseña," +
                    "InfoContacto,Nombre,email,PuntosDispo", "CLIENTE");
                return Ok(clienteList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<SucursalçController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SucursalçController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SucursalçController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
