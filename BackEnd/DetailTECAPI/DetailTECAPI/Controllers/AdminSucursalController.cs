using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminSucursalController : ControllerBase
    {
        private AdminSucursal adminSucursal = new();
        // GET: api/<AdminSucursalController>
        [HttpGet]
        public async Task<ActionResult<List<AdminSucursal>>> Get()
        {
            try
            {
                var entityList = adminSucursal.get("IDTrabajador,Sucursal,FechaInicio", "ADMIN_SUCURSAL");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<AdminSucursalController>/5
        [HttpGet("{sucursal}")]
        public async Task<ActionResult<List<AdminSucursal>>> Get(string sucursal)
        {
            try
            {
                var entityList = adminSucursal.get($"'{sucursal}'", "Sucursal", "IDTrabajador, Sucursal, FechaInicio", "ADMIN_SUCURSAL");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<AdminSucursalController>
        [HttpPost]
        public async Task<ActionResult<List<AdminSucursal>>> Post(AdminSucursal adminSucursal)
        {
            List<AdminSucursal> entityList = new List<AdminSucursal>();
            entityList.Add(adminSucursal);

            var result = adminSucursal.post("ADMIN_SUCURSAL", $"{adminSucursal.IDTrabajador},'{adminSucursal.Sucursal}','{adminSucursal.FechaInicio}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar al admin de {adminSucursal.Sucursal}");

        }

        // PUT api/<AdminSucursalController>/5
        [HttpPut]
        public async Task<ActionResult<AdminSucursal>> Put(AdminSucursal adminSucursal)
        {

            List<AdminSucursal> entityList = new List<AdminSucursal>();
            entityList.Add(adminSucursal);

            var result = adminSucursal.put("ADMIN_SUCURSAL",$"IDTrabajador = {adminSucursal.IDTrabajador}," +
                $"FechaInicio = '{adminSucursal.FechaInicio}'",$"Sucursal = '{adminSucursal.Sucursal}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar al admin de {adminSucursal.Sucursal}");
        }

        // DELETE api/<AdminSucursalController>/5
        [HttpDelete("{sucursal}")]
        public async Task<ActionResult<AdminSucursal>> Delete(string sucursal)
        {
            List<AdminSucursal> entityList = new List<AdminSucursal>();
            var result = adminSucursal.delete("ADMIN_SUCURSAL", $"Sucursal = '{sucursal}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar al admin de {sucursal}");
        }
    }
}
