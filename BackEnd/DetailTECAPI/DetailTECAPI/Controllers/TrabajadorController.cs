using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadorController : ControllerBase
    {
        private Trabajador trabajador = new Trabajador();
        // GET: api/<TrabajadorController>
        [HttpGet]
        public async Task<ActionResult<List<Trabajador>>> Get()
        {
            try
            {
                var entityList = trabajador.get("IDTrabajador,Nacimiento,Contraseña,Rol," +
                    "Nombre,Apellidos,FechaIngreso,TipoPago", "TRABAJADOR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<TrabajadorController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Trabajador>>> Get(int id)
        {
            try
            {
                var entityList = trabajador.get(id.ToString(), "IDTrabajador", "IDTrabajador,Nacimiento,Contraseña,Rol," +
                    "Nombre,Apellidos,FechaIngreso,TipoPago", "TRABAJADOR");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<TrabajadorController>
        [HttpPost]
        public async Task<ActionResult<List<Trabajador>>> Post(Trabajador trabajador)
        {
            List<Trabajador> entityList = new List<Trabajador>();
            entityList.Add(trabajador);

            var result = trabajador.post("TRABAJADOR", $"{trabajador.IDTrabajador},'{trabajador.Contraseña}'," +
                $"'{trabajador.Rol}','{trabajador.Nombre}','{trabajador.Apellidos}','{trabajador.TipoPago}','{trabajador.Nacimiento}','{trabajador.FechaIngreso}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {trabajador.IDTrabajador}");

        }

        // PUT api/<TrabajadorController>/5
        [HttpPut]
        public async Task<ActionResult<Trabajador>> Put(Trabajador trabajador)
        {

            List<Trabajador> entityList = new List<Trabajador>();
            entityList.Add(trabajador);

            var result = trabajador.put("TRABAJADOR", $"Nacimiento = '{trabajador.Nacimiento}',Contraseña = '{trabajador.Contraseña}',Rol = '{trabajador.Rol}'," +
                    $"Nombre = '{trabajador.Nombre}', Apellidos = '{trabajador.Apellidos}'," +
                    $"FechaIngreso = '{trabajador.FechaIngreso}',TipoPago = '{trabajador.TipoPago}'", 
                    $"IDTrabajador = '{trabajador.IDTrabajador}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {trabajador.IDTrabajador}");
        }

        // DELETE api/<TrabajadorController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Trabajador>> Delete(int id)
        {
            List<Trabajador> entityList = new List<Trabajador>();
            var result = trabajador.delete("TRABAJADOR", $"IDTrabajador = {id}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {id}");
        }
    }
}
