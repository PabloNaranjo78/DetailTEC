using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteTelefonosController : ControllerBase
    {
        // GET: api/<ClienteTelefonosController>
        private ClienteTelefonos clienteTelefonos = new ClienteTelefonos();
        [HttpGet]
        public async Task<ActionResult<List<ClienteTelefonos>>> Get()
        {
            try
            {
                var entityList = clienteTelefonos.get("IDCliente,Telefono", "CLIENTE_TELEFONOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ClienteTelefonosController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ClienteTelefonos>>> Get(int id)
        {
            try
            {
                var entityList = clienteTelefonos.get(id.ToString(), "IDCliente", "IDCliente,Telefono", "CLIENTE_TELEFONOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }
        // POST api/<ClienteTelefonosController>
        [HttpPost]
        public async Task<ActionResult<List<ClienteTelefonos>>> Post(ClienteTelefonos clienteTelefonos)
        {
            List<ClienteTelefonos> entityList = new List<ClienteTelefonos>();
            entityList.Add(clienteTelefonos);

            var result = clienteTelefonos.post("CLIENTE_TELEFONOS", $"{clienteTelefonos.IDCliente},{clienteTelefonos.Telefono}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar el telefono de {clienteTelefonos.IDCliente}");

        }

        // POST api/<ClienteTelefonosController>
        [HttpPost("app/{json}")]
        public async Task<ActionResult<List<ClienteTelefonos>>> PostAndroid(string json)
        {
            var clienteTelefonos = JsonConvert.DeserializeObject<ClienteTelefonos>(json);
            List<ClienteTelefonos> entityList = new List<ClienteTelefonos>();
            entityList.Add(clienteTelefonos);

            var result = clienteTelefonos.post("CLIENTE_TELEFONOS", $"{clienteTelefonos.IDCliente},{clienteTelefonos.Telefono}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar el telefono de {clienteTelefonos.IDCliente}");

        }

        // DELETE api/<ClienteTelefonosController>/5
        [HttpDelete("{idCliente}/{telefono}")]
        public async Task<ActionResult<ClienteTelefonos>> Delete(int idCliente, int telefono)
        {
            List<ClienteTelefonos> entityList = new List<ClienteTelefonos>();
            var result = clienteTelefonos.delete("CLIENTE_TELEFONOS", $"IDCliente = '{idCliente}' AND Telefono = '{telefono}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {telefono}");
        }
    }
}
