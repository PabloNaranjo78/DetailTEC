using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProveidoPorController : ControllerBase
    {
        // GET: api/<ProveidoPorController>
        private ProveidoPor proveidoPor = new();
        // GET: api/<ProductosUsadosController>
        [HttpGet]
        public async Task<ActionResult<List<ProveidoPor>>> Get()
        {
            try
            {
                var entityList = proveidoPor.get("NombrePro,MarcaPro,Proveedor", "PROVEIDO_POR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ClienteTelefonosController>/5
        [HttpGet("{nombrePro}")]
        public async Task<ActionResult<List<ProveidoPor>>> Get(string nombrePro)
        {
            try
            {
                var entityList = proveidoPor.get($"'{nombrePro}'", "NombrePro", "NombrePro,MarcaPro,Proveedor", "PROVEIDO_POR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }
        // POST api/<ClienteTelefonosController>
        [HttpPost]
        public async Task<ActionResult<List<ProveidoPor>>> Post(ProveidoPor proveidoPor)
        {
            List<ProveidoPor> entityList = new List<ProveidoPor>();
            entityList.Add(proveidoPor);

            var result = proveidoPor.post("PROVEIDO_POR", $"'{proveidoPor.NombrePro}','{proveidoPor.MarcaPro}',{proveidoPor.Proveedor}");
            return result ? Ok(entityList) : BadRequest($"No se logró agregar el telefono de {proveidoPor.NombrePro}");

        }

        // DELETE api/<ClienteTelefonosController>/5
        [HttpDelete("{nombrePro}/{marcaPro}/{proveedor}")]
        public async Task<ActionResult<ProveidoPor>> Delete(string nombrePro, string marcaPro, int proveedor)
        {
            List<ProveidoPor> entityList = new List<ProveidoPor>();
            var result = proveidoPor.delete("PROVEIDO_POR", $"NombrePro = '{nombrePro}' AND MarcaPro = '{marcaPro}' AND Proveedor = {proveedor}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {nombrePro}");
        }
    }
}
