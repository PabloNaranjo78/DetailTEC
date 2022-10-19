using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProveedorController : ControllerBase
    {
        private Proveedor proveedor = new Proveedor();
        // GET: api/<ProveedorController>
        [HttpGet]
        public async Task<ActionResult<List<Proveedor>>> Get()
        {
            try
            {
                var proveedorList = proveedor.get("CedulaJur,Nombre,Email," +
                    "Contacto,Direccion", "PROVEEDOR");
                return Ok(proveedorList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ProveedorController>/5
        [HttpGet("{cedulaJur}")]
        public async Task<ActionResult<List<Proveedor>>> Get(string cedulaJur)
        {
            try
            {
                var entityList = proveedor.get($"'{cedulaJur}'", "CedulaJur", "CedulaJur,Nombre,Email," +
                    "Contacto,Direccion", "PROVEEDOR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<ProveedorController>
        [HttpPost]
        public async Task<ActionResult<List<Proveedor>>> Post(Proveedor proveedor)
        {
            List<Proveedor> entityList = new List<Proveedor>();
            entityList.Add(proveedor);

            var result = proveedor.post("Proveedor", $"{proveedor.CedulaJur},'{proveedor.Nombre}','{proveedor.Email}','{proveedor.Contacto}'," +
                $"'{proveedor.Direccion}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {proveedor.Nombre}");

        }

        // PUT api/<ProveedorController>/5
        [HttpPut]
        public async Task<ActionResult<Proveedor>> Put(Proveedor proveedor)
        {

            List<Proveedor> entityList = new List<Proveedor>();
            entityList.Add(proveedor);


            var result = proveedor.put("PROVEEDOR", $"Nombre = '{proveedor.Nombre}',Email = '{proveedor.Email}', " +
                $"Contacto = '{proveedor.Contacto}', Direccion = '{proveedor.Direccion}'", $"CedulaJur = {proveedor.CedulaJur}");

            return true ? Ok(entityList) : BadRequest($"No se logró modificar a {proveedor.Nombre}");
        }

        // DELETE api/<ProveedorController>/5
        [HttpDelete("{cedulaJur}")]
        public async Task<ActionResult<Proveedor>> Delete(int cedulaJur)
        {
            List<Proveedor> entityList = new List<Proveedor>();
            var result = proveedor.delete("PROVEEDOR", $"CedulaJur = {cedulaJur}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {cedulaJur}");
        }
    }
}
