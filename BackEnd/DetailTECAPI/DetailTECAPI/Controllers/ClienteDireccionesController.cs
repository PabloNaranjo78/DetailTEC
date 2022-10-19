using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteDireccionesController : ControllerBase
    {
        private ClienteDirecciones clienteDirecciones = new ClienteDirecciones();
        // GET: api/<DireccionesClienteController>
        [HttpGet]
        public async Task<ActionResult<List<ClienteDirecciones>>> Get()
        {
            try
            {
                var entityList = clienteDirecciones.get("IDCliente,Provincia,Canton,Distrito", "CLIENTE_DIRECCIONES");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ClienteTelefonosController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ClienteDirecciones>>> Get(int id)
        {
            try
            {
                var entityList = clienteDirecciones.get(id.ToString(), "IDCliente", "IDCliente,Provincia,Canton,Distrito", "CLIENTE_DIRECCIONES");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }
        // POST api/<ClienteTelefonosController>
        [HttpPost]
        public async Task<ActionResult<List<ClienteDirecciones>>> Post(ClienteDirecciones clienteDirecciones)
        {
            List<ClienteDirecciones> entityList = new List<ClienteDirecciones>();
            entityList.Add(clienteDirecciones);

            var result = clienteDirecciones.post("CLIENTE_DIRECCIONES", $"{clienteDirecciones.IDCliente},'{clienteDirecciones.Provincia}'," +
                $"'{clienteDirecciones.Canton}','{clienteDirecciones.Distrito}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar la direccion de {clienteDirecciones.IDCliente}");

        }

        // DELETE api/<ClienteTelefonosController>/5
        [HttpDelete("{idCliente}/{provincia}/{canton}/{distrito}")]
        public async Task<ActionResult<ClienteDirecciones>> Delete(int idCliente, string provincia, string canton, string distrito)
        {
            List<ClienteDirecciones> entityList = new List<ClienteDirecciones>();
            var result = clienteDirecciones.delete("CLIENTE_DIRECCIONES", $"IDCliente = {idCliente} AND Provincia = '{provincia}' AND " +
                $"Canton = '{canton}' AND Distrito = '{distrito}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {idCliente}");
        }
    }
}
