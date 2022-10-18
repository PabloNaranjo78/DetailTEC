using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using DetailTECAPI.Connection;
using DetailTECAPI.Tables;
using Microsoft.OpenApi.Extensions;

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private Cliente cliente = new Cliente();
        // GET: api/<ClienteController>
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            try
            {
                var entityList = cliente.get("IDcliente,Usuario,Contraseña," +
                    "InfoContacto,Nombre,email,PuntosDispo", "CLIENTE");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<ClienteController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Cliente>>> Get(int id)
        {
            try
            {
                var clienteList = cliente.get(id.ToString(), "IDcliente", "IDcliente,Usuario,Contraseña," +
                    "InfoContacto,Nombre,email,PuntosDispo", "CLIENTE");
                return Ok(clienteList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<ClienteController>
        [HttpPost]
        public async Task<ActionResult<List<Cliente>>> Post(Cliente cliente)
        {
            List<Cliente> entityList = new List<Cliente>();
            entityList.Add(cliente);

            var result = cliente.post("CLIENTE", $"{cliente.IDCliente},'{cliente.Usuario}'," +
                $"'{cliente.Contraseña}','{cliente.InfoContacto}','{cliente.Nombre}','{cliente.email}'," +
                $"{cliente.PuntosDispo}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {cliente.IDCliente}");

        }

        // PUT api/<ClienteController>/5
        [HttpPut]
        public async Task<ActionResult<Cliente>> Put(Cliente cliente)
        {

            List<Cliente> entityList = new List<Cliente>();
            entityList.Add(cliente);
           

            var result = cliente.put("CLIENTE", $"Usuario = '{cliente.Usuario}', Contraseña = '{cliente.Contraseña}'," +
                $"InfoContacto = '{cliente.InfoContacto}',Nombre = '{cliente.Nombre}'," +
                $"email = '{cliente.email}', PuntosDispo = {cliente.PuntosDispo}", $"IDcliente = {cliente.IDCliente}");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {cliente.IDCliente}");
        }

        // DELETE api/<ClienteController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cliente>> Delete(int id)
        {
            List<Cliente> entityList = new List<Cliente>();
            var result = cliente.delete("CLIENTE", $"IDcliente = {id}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {id}");
        }
    }
}
