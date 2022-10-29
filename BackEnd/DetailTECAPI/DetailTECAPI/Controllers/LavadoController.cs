using DetailTECAPI.Tables;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{



    [Route("api/[controller]")]
    [ApiController]
    public class LavadoController : ControllerBase
    {
        private Lavado lavado = new Lavado();

        // GET: api/<LavadoController>
        [HttpGet]
        public async Task<ActionResult<List<Lavado>>> Get()
        {
            try
            {
                var lavadoList = lavado.get("NombreLav,Duracion,Precio,Costo,Puntos,PuntosOtorgar", "LAVADO");
                return Ok(lavadoList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<LavadoController>/5
        [HttpGet("{nombreLav}")]
        public async Task<ActionResult<List<Lavado>>> Get(string nombreLav)
        {
            try
            {
                var lavadoList = lavado.get($"'{nombreLav}'", "NombreLav", "NombreLav,Duracion," +
                "Precio,Costo,Puntos,PuntosOtorgar", "LAVADO");
                return Ok(lavadoList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<LavadoController>
        [HttpPost]
        public async Task<ActionResult<Lavado>> Post(Lavado lavado)
        {
            List<Lavado> entityList = new List<Lavado>();
            entityList.Add(lavado);

            var result = lavado.post("LAVADO", $"'{lavado.NombreLav}', {lavado.Duracion}, {lavado.Precio}, {lavado.Costo}, {lavado.Puntos}, {lavado.PuntosOtorgar}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {lavado.NombreLav}");

        }

        [HttpPost("app/{lavadoJson}")]
        public async Task<ActionResult<Lavado>> PostAdroid(string lavadoJson)
        {
            Console.WriteLine(lavadoJson);
            var lavado = JsonConvert.DeserializeObject<Lavado>(lavadoJson);
            List<Lavado> entityList = new List<Lavado>();
            entityList.Add(lavado);

            var result = lavado.post("LAVADO", $"'{lavado.NombreLav}', {lavado.Duracion}, {lavado.Precio}, {lavado.Costo}, {lavado.Puntos}, {lavado.PuntosOtorgar}");

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

        // PUT api/<LavadoController>/5
        [HttpPut("app/{lavadoJson}")]   
        public async Task<ActionResult<Lavado>> PutAndroid(string lavadoJson)
        {
            var lavado = JsonConvert.DeserializeObject<Lavado>(lavadoJson);
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
