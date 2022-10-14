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
        private SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);
        private Cliente cliente = new Cliente();
        // GET: api/<ClienteController>
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            try
            {
                var clienteList = cliente.get("IDcliente,Usuario,Contraseña," +
                    "InfoContacto,Nombre,email,PuntosDispo", "CLIENTE");
                return Ok(clienteList);
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
                var clienteList = cliente.get(id, "IDcliente", "IDcliente,Usuario,Contraseña," +
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
            //SqlCommand cmd = new SqlCommand($"Delete from Cliente where IDcliente = {id}", connection);
            //List<Cliente> clienteList = new List<Cliente>();

            //try
            //{
            //    connection.Open();
            //    cmd.ExecuteNonQuery();

            //    SqlDataReader dr = cmd.ExecuteReader();
            //    return Ok(clienteList);
            //}
            //catch (Exception)
            //{
            //    return BadRequest("No se logró conectar con la DB");

            //}
            List<Cliente> entityList = new List<Cliente>();
            var result = cliente.delete("CLIENTE", $"IDcliente = {id}");
            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {cliente.IDCliente}");
        }
    }
}
