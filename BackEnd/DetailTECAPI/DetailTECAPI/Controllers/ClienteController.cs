using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using DetailTECAPI.Connection;
using DetailTECAPI.Tables;

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);
        // GET: api/<ClienteController>
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            SqlCommand cmd = new SqlCommand("Select IDcliente,Usuario,Contraseña," +
                "InfoContacto,Nombre,email,PuntosDispo from CLIENTE", connection);
            List<Cliente> clienteList = new List<Cliente>();
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                clienteList = Cliente.createClienteList(dr);
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
            SqlCommand cmd = new SqlCommand("Select IDcliente,Usuario,Contraseña," +
                $"InfoContacto,Nombre,email,PuntosDispo from CLIENTE where IDcliente = {id}", connection);
            List<Cliente> clienteList = new List<Cliente>();
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                clienteList = Cliente.createClienteList(dr);
                return Ok(clienteList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }

        }

        // POST api/<ClienteController>
        [HttpPost]
        public async Task<ActionResult<List<Cliente>>> Post(Cliente cliente)
        {
            SqlCommand cmd = new SqlCommand($"INSERT INTO CLIENTE VALUES ({cliente.IDcliente},'{cliente.Usuario}'," +
                $"'{cliente.Contraseña}','{cliente.InfoContacto}','{cliente.Nombre}','{cliente.email}'," +
                $"{cliente.PuntosDispo})", connection);
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();
                return Ok("Añadido");
            }
            catch (Exception)
            {
                return BadRequest("Ya existe el usuario");

            }

        }

        // PUT api/<ClienteController>/5
        [HttpPut]
        public async Task<ActionResult<Cliente>> Put(Cliente cliente)
        {
            SqlCommand cmd = new SqlCommand($"Update CLIENTE " +
                $"Set Usuario = '{cliente.Usuario}', Contraseña = '{cliente.Contraseña}'," +
                $"InfoContacto = '{cliente.InfoContacto}',Nombre = '{cliente.Nombre}'," +
                $"email = '{cliente.email}', PuntosDispo = {cliente.PuntosDispo} Where IDcliente = {cliente.IDcliente}",
                connection);

          
                connection.Open();
                cmd.ExecuteNonQuery();
                return Ok("Modificado");
           
        }

        // DELETE api/<ClienteController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            SqlCommand cmd = new SqlCommand($"Delete from Cliente where IDcliente = {id}", connection);
            
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                return Ok("Eliminado");
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }
    }
}
