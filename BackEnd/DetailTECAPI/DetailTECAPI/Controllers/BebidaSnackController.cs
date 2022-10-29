using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BebidaSnackController : ControllerBase
    {
        private BebidaSnack bebida = new();
        // GET: api/<BebidaController>
        [HttpGet]
        public async Task<ActionResult<List<BebidaSnack>>> Get()
        {
            try
            {
                var entityList = bebida.get("Nombre,Cantidad,Costo,Tipo", "BEBIDA_SNACK");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<BebidaController>/5
        [HttpGet("{nombre}")]
        public async Task<ActionResult<List<BebidaSnack>>> Get(string nombre)
        {
            try
            {
                var entityList = bebida.get($"'{nombre}'", "Nombre", "Nombre,Cantidad,Costo,Tipo", "BEBIDA_SNACK");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // GET api/<BebidaController>/5
        [HttpGet("tipo/{tipo}")]
        public async Task<ActionResult<List<BebidaSnack>>> GetTipo(string tipo)
        {
            try
            {
                var entityList = bebida.get($"'{tipo}'", "Tipo", "Nombre,Cantidad,Costo,Tipo", "BEBIDA_SNACK");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<BebidaController>
        [HttpPost]
        public async Task<ActionResult<List<BebidaSnack>>> Post(BebidaSnack bebida)
        {
            List<BebidaSnack> entityList = new List<BebidaSnack>();
            entityList.Add(bebida);

            var result = bebida.post("BEBIDA_SNACK", $"'{bebida.Nombre}',{bebida.Cantidad},{bebida.Costo},'{bebida.Tipo}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {bebida.Nombre}");

        }

        // PUT api/<BebidaController>/5
        [HttpPut]
        public async Task<ActionResult<BebidaSnack>> Put(BebidaSnack bebida)
        {

            List<BebidaSnack> entityList = new List<BebidaSnack>();
            entityList.Add(bebida);

            var result = bebida.put("BEBIDA_SNACK", $"Cantidad = {bebida.Cantidad}, Costo = {bebida.Costo}",
                    $"Nombre = '{bebida.Nombre}' AND Tipo = '{bebida.Tipo}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {bebida.Nombre}");
        }
        // DELETE api/<BebidaController>/5
        [HttpDelete("{nombre}/{tipo}")]
        public async Task<ActionResult<BebidaSnack>> Delete(string nombre, string tipo)
        {
            List<Cita> entityList = new List<Cita>();
            var result = bebida.delete("BEBIDA_SNACK", $"Nombre = '{nombre}' AND Tipo '{tipo}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {nombre}");
        }
    }
}
