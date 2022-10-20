using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosUsadosController : ControllerBase
    {
        private ProductosUsados productosUsados = new();
        // GET: api/<ProductosUsadosController>
        [HttpGet]
        public async Task<ActionResult<List<ProductosUsados>>> Get()
        {
            try
            {
                var entityList = productosUsados.get("NombrePro,MarcaPro,Lavado", "PRODUCTOS_USADOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ClienteTelefonosController>/5
        [HttpGet("{nombrePro}")]
        public async Task<ActionResult<List<ProductosUsados>>> Get(string nombrePro)
        {
            try
            {
                var entityList = productosUsados.get($"'{nombrePro}'", "NombrePro", "NombrePro,MarcaPro,Lavado", "PRODUCTOS_USADOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }
        // POST api/<ClienteTelefonosController>
        [HttpPost]
        public async Task<ActionResult<List<ProductosUsados>>> Post(ProductosUsados productosUsados)
        {
            List<ProductosUsados> entityList = new List<ProductosUsados>();
            entityList.Add(productosUsados);

            var result = productosUsados.post("PRODUCTOS_USADOS", $"'{productosUsados.NombrePro}','{productosUsados.MarcaPro}','{productosUsados.Lavado}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar el telefono de {productosUsados.NombrePro}");

        }

        // DELETE api/<ClienteTelefonosController>/5
        [HttpDelete("{nombrePro}/{marcaPro}/{lavado}")]
        public async Task<ActionResult<ProductosUsados>> Delete(string nombrePro, string marcaPro, string lavado)
        {
            List<ProductosUsados> entityList = new List<ProductosUsados>();
            var result = productosUsados.delete("PRODUCTOS_USADOS", $"NombrePro = '{nombrePro}' AND MarcaPro = '{marcaPro}' AND Lavado = '{lavado}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {nombrePro}");
        }

    }
}
