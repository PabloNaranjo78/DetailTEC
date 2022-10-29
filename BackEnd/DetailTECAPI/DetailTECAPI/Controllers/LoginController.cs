using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        protected SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);
        // POST api/<LoginController>
        [HttpGet("cliente/{id}/{contraseña}")]
        public async Task<ActionResult<bool>> PostCliente(int id, string contraseña)
        {
            Cliente cliente = new();

            try
            {
                SqlCommand cmd = new SqlCommand($"Select IDcliente,Usuario,Contraseña," +
                    $"InfoContacto,Nombre,email,PuntosDispo,PuntosRedm from CLIENTE Where IDCliente = {id} AND Contraseña = '{contraseña}'", connection);

                List<Cliente> tipoLavadoList = new List<Cliente>();
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                tipoLavadoList = cliente.createEntityList(dr);


            if (tipoLavadoList.Count == 0)
            {
                return Ok(false);
            }

            return Ok(true);
        }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

    }
}

        // POST api/<LoginController>
        [HttpGet("admin/{id}/{contraseña}")]
        public async Task<ActionResult<bool>> PostAdmin(int id, string contraseña)
        {
            Trabajador trabajador = new();

            try
            {
                SqlCommand cmd = new SqlCommand($"Select IDTrabajador,Nacimiento,Contraseña,Rol," +
                    $"Nombre,Apellidos,FechaIngreso,TipoPago from TRABAJADOR Where IDTrabajador = {id} AND Contraseña = '{contraseña}'", connection);

                List <Trabajador> tipoLavadoList = new List<Trabajador>();
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                tipoLavadoList = trabajador.createEntityList(dr);


                if (tipoLavadoList.Count == 0)
                {
                    return Ok(false);
                }

                return Ok(true);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }


    }
}
