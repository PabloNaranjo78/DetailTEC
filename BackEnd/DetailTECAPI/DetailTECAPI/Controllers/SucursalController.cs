using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SucursalController : ControllerBase
    {
        Sucursal sucursal = new();

        // GET: api/<SucursalController>
        [HttpGet]
        public async Task<ActionResult<List<Sucursal>>> Get()
        {
            try
            {
                var entityList = sucursal.get("NombreSuc,FechaApert,Telefono," +
                    "Provincia,Canton,Distrito,TiempoDispo", "Sucursal");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }

        }

        // GET api/<SucursalController>/5
        [HttpGet("{nombreSuc}")]
        public async Task<ActionResult<List<Sucursal>>> Get(string nombreSuc)
        {
            try
            {
                var entityList = sucursal.get($"'{nombreSuc}'", "NombreSuc", "NombreSuc, FechaApert, Telefono, " +
                    "Provincia, Canton, Distrito, TiempoDispo", "Sucursal");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("Error durante la consulta");

            }

        }

        // POST api/<SucursalController>
        [HttpPost]
        public async Task<ActionResult<List<Sucursal>>> Post(Sucursal sucursal)
        {
            List<Sucursal> entityList = new List<Sucursal>();
            entityList.Add(sucursal);

            var result = sucursal.post("SUCURSAL", $"'{sucursal.NombreSuc}',{sucursal.Telefono}," +
                $"'{sucursal.Provincia}','{sucursal.Canton}','{sucursal.Distrito}',{sucursal.TiempoDispo},'{sucursal.FechaApert}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {sucursal.NombreSuc}");

        }

        // POST api/<SucursalController>
        [HttpPost("app/{json}")]
        public async Task<ActionResult<List<Sucursal>>> PostAndroid(string json)
        {
            var sucursal = JsonConvert.DeserializeObject<Sucursal>(json);
            List<Sucursal> entityList = new List<Sucursal>();
            entityList.Add(sucursal);

            var result = sucursal.post("SUCURSAL", $"'{sucursal.NombreSuc}',{sucursal.Telefono}," +
                $"'{sucursal.Provincia}','{sucursal.Canton}','{sucursal.Distrito}',{sucursal.TiempoDispo},'{sucursal.FechaApert}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {sucursal.NombreSuc}");

        }

        // PUT api/<SucursalController>/5
        [HttpPut]
        public async Task<ActionResult<Sucursal>> Put(Sucursal sucursal)
        {

            List<Sucursal> entityList = new List<Sucursal>();
            entityList.Add(sucursal);

            var result = sucursal.put("SUCURSAL", $"FechaApert = '{sucursal.FechaApert}', Telefono = {sucursal.Telefono}, " +
                    $"Provincia = '{sucursal.Provincia}', Canton = '{sucursal.Canton}', Distrito = '{sucursal.Distrito}', " +
                    $"TiempoDispo = {sucursal.TiempoDispo}", $"NombreSuc = '{sucursal.NombreSuc}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {sucursal.NombreSuc}");
        }

        // PUT api/<SucursalController>/5
        [HttpPut("app/{json}")]
        public async Task<ActionResult<Sucursal>> PutAndroid(string json)
        {
            var sucursal = JsonConvert.DeserializeObject<Sucursal>(json);
            List<Sucursal> entityList = new List<Sucursal>();
            entityList.Add(sucursal);

            var result = sucursal.put("SUCURSAL", $"FechaApert = '{sucursal.FechaApert}', Telefono = {sucursal.Telefono}, " +
                    $"Provincia = '{sucursal.Provincia}', Canton = '{sucursal.Canton}', Distrito = '{sucursal.Distrito}', " +
                    $"TiempoDispo = {sucursal.TiempoDispo}", $"NombreSuc = '{sucursal.NombreSuc}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {sucursal.NombreSuc}");
        }

        // DELETE api/<SucursalController>/5
        [HttpDelete("{nombreSuc}")]
        public async Task<ActionResult<Sucursal>> Delete(string nombreSuc)
        {
            List<Sucursal> entityList = new List<Sucursal>();
            var result = sucursal.delete("SUCURSAL", $"NombreSuc = '{nombreSuc}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {nombreSuc}");
        }
    }
}
