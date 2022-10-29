using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalController : ControllerBase
    {
        Personal personal = new();
        // GET: api/<PersonalController>
        [HttpGet]
        public async Task<ActionResult<List<Personal>>> Get()
        {
            try
            {
                var entityList = personal.get("IDTrabajador,Lavado", "Personal");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }

        }

        // GET api/<PersonalController>/5
        [HttpGet("trabajador/{idTrabajador}")]
        public async Task<ActionResult<List<Sucursal>>> Get(int idTrabajador)
        {
            try
            {
                var entityList = personal.get($"{idTrabajador}", "IDTrabajador", "IDTrabajador,Lavado", "Personal");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // GET api/<PersonalController>/5
        [HttpGet("{lavado}")]
        public async Task<ActionResult<List<Sucursal>>> Get(string lavado)
        {
            try
            {
                var entityList = personal.get($"'{lavado}'", "Lavado", "IDTrabajador,Lavado", "Personal");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<PersonalController>
        [HttpPost]
        public async Task<ActionResult<List<Personal>>> Post(Personal personal)
        {
            List<Personal> entityList = new List<Personal>();
            entityList.Add(personal);

            var result = personal.post("Personal", $"{personal.IDTrabajador},'{personal.Lavado}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {personal.IDTrabajador}");

        }

        // DELETE api/<PersonalController>/5
        [HttpDelete("{idTrabajador}/{lavado}")]
        public async Task<ActionResult<Personal>> Delete(int id, string lavado)
        {
            List<Sucursal> entityList = new List<Sucursal>();
            var result = personal.delete("Personal", $"IDTrabajador = {id} AND Lavado = '{lavado}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {id}-{lavado}");
        }
    }
}
