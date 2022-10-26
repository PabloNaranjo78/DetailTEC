using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsumoController : ControllerBase
    {
        private Insumo insumo = new Insumo();
        // GET: api/<InsumoController>
        [HttpGet]
        public async Task<ActionResult<List<Insumo>>> Get()
        {
            try
            {
                var lavadoList = insumo.get("NombrePro,MarcaPro,Costo", "INSUMO");
                return Ok(lavadoList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET: api/<InsumoController>
        [HttpGet("solo/")]
        public async Task<ActionResult<Insumo>> GetSolo()
        {
            try
            {
                var lavadoList = insumo.get("NombrePro,MarcaPro,Costo", "INSUMO");
                return Ok(lavadoList.First());
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<InsumoController>/5
        [HttpGet("{marca}/{nombre}")]
        public async Task<ActionResult<List<Insumo>>> Get(string marca, string nombre)
        {
            try
            {
                var insumoList = insumo.get($"'{marca}' AND NombrePro = '{nombre}'", "MarcaPro", "NombrePro, MarcaPro,Costo", "INSUMO");
                return Ok(insumoList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<InsumoController>
        [HttpPost]
        public async Task<ActionResult<List<Insumo>>> Post(Insumo insumo)
        {
            List<Insumo> entityList = new List<Insumo>();
            entityList.Add(insumo);

            var result = insumo.post("INSUMO", $"'{insumo.NombrePro}','{insumo.MarcaPro}',{insumo.Costo}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {insumo.NombrePro}");

        }

        // PUT api/<InsumoController>/5
        [HttpPut]
        public async Task<ActionResult<Insumo>> Put(Insumo insumo)
        {

            List<Insumo> entityList = new List<Insumo>();
            entityList.Add(insumo);

            var result = insumo.put("INSUMO", $"Costo = {insumo.Costo}", $"MarcaPro = '{insumo.MarcaPro}' AND NombrePro = '{insumo.NombrePro}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {insumo.NombrePro}");
        }

        // DELETE api/<InsumoController>/5
        [HttpDelete("{marca}/{nombre}")]
        public async Task<ActionResult<Insumo>> Delete(string marca, string nombre)
        {
            List<Insumo> entityList = new List<Insumo>();
            var result = insumo.delete("INSUMO", $"NombrePro = '{nombre}' AND MarcaPro = '{marca}'");
            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {nombre}, {marca}");
        }
    }
}
