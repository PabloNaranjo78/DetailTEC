using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{



    [Route("api/[controller]")]
    [ApiController]
    public class LavadoController : ControllerBase
    {
        Lavado lavado = new Lavado();

        // GET: api/<LavadoController>
        [HttpGet]
        public async Task<ActionResult<List<Lavado>>> Get()
        {
            try
            {
                var lavadoList = lavado.get("NombreLav,Duracion,Precio,Costo,Puntos", "LAVADO");
                return Ok(lavadoList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<LavadoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Lavado>>> Get(string id)
        {
            try
            {
                var lavadoList = lavado.get(id, "NombreLav", "NombreLav,Duracion," +
                    "Precio,Costo,Puntos", "LAVADO");
                return Ok(lavadoList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<LavadoController>
        [HttpPost]
        public async Task<ActionResult<List<Lavado>>> Post(Lavado lavado)
        {
            List<Lavado> entityList = new List<Lavado>();
            entityList.Add(lavado);

            var result = lavado.post("LAVADO", $"'{lavado.NombreLav}',{lavado.Duracion},{lavado.Precio}" +
                $"{lavado.Costo},{lavado.Puntos}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {lavado.NombreLav}");

        }

        // PUT api/<LavadoController>/5
        [HttpPut]
        public async Task<ActionResult<Lavado>> Put(Lavado lavado)
        {

            List<Lavado> entityList = new List<Lavado>();
            entityList.Add(lavado);

            var result = lavado.put("LAVADO", $"Duracion = {lavado.Duracion}" +
                $"Precio = {lavado.Precio}, Costo = {lavado.Costo}, Puntos = {lavado.Puntos}",
                $"NombreLav = '{lavado.NombreLav}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {lavado.NombreLav}");
        }

        // DELETE api/<LavadoController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lavado>> Delete(string id)
        {
            List<Lavado> entityList = new List<Lavado>();
            var result = lavado.delete("LAVADO", $"Nombrelav = '{id}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {id}");
        }
    }
}
