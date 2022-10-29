using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Numerics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitaController : ControllerBase
    {
        private Cita cita = new Cita();
        // GET: api/<CitaController>
        [HttpGet]
        public async Task<ActionResult<List<Cita>>> Get()
        {
            try
            {
                var entityList = cita.get("Placa,FechaCita,IDEmpleado,Sucursal," +
                    "Lavado,IDCliente", "CITA");
                return Ok(entityList);
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());

            }
        }

        // GET api/<CitaController>/5
        [HttpGet("{placa}")]
        public async Task<ActionResult<List<Cita>>> Get(int placa)
        {
            try
            {
                var entityList = cita.get(placa.ToString(), "Placa", "Placa, FechaCita, IDEmpleado, Sucursal, " +
                    "Lavado,IDCliente", "CITA");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // GET api/<CitaController>/5
        [HttpGet("cliente/{idCliente}")]
        public async Task<ActionResult<List<Cita>>> GetCliente(int idCliente)
        {
            try
            {
                var entityList = cita.get(idCliente.ToString(), "IDCliente", "Placa, FechaCita, IDEmpleado, Sucursal, " +
                    "Lavado,IDCliente", "CITA");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<CitaController>
        [HttpPost]
        public async Task<ActionResult<List<Cita>>> Post(Cita cita)
        {

            List<Cita> entityList = new List<Cita>();
            entityList.Add(cita);

            var result = cita.post("CITA", $"{cita.Placa},{cita.IDEmpleado},'{cita.Sucursal}','{cita.Lavado}',{cita.IDCliente},'{cita.FechaCita}'");

            return result ? Ok(entityList) : BadRequest($"No se logre agregar a {cita.Placa}");

        }

        [HttpPost("app/{citaJson}")]
        public async Task<ActionResult<Lavado>> PostAdroid(string citaJson)
        {
            var cita = JsonConvert.DeserializeObject<Cita>(citaJson);
            List<Cita> entityList = new List<Cita>();
            entityList.Add(cita);

            var result = cita.post("CITA", $"{cita.Placa},{cita.IDEmpleado},'{cita.Sucursal}','{cita.Lavado}',{cita.IDCliente},'{cita.FechaCita}'");

            return result ? Ok(entityList) : BadRequest($"No se logre agregar a {cita.Placa}");

        }

        // PUT api/<CitaController>/5
        [HttpPut("app/{citaJson}")]
        public async Task<ActionResult<Cita>> Put(string citaJson)
        {
            var cita = JsonConvert.DeserializeObject<Cita>(citaJson);
            List<Cita> entityList = new List<Cita>();
            entityList.Add(cita);

            var result = cita.put("CITA", $"FechaCita = '{cita.FechaCita}', IDEmpleado = {cita.IDEmpleado}, Sucursal = '{cita.Sucursal}', " +
                    $"Lavado ='{cita.Lavado}',IDCliente = {cita.IDCliente}",
                    $"Placa = {cita.Placa}");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {cita.Placa}");
        }

        // PUT api/<CitaController>/5
        [HttpPut]
        public async Task<ActionResult<Cita>> Put(Cita cita)
        {

            List<Cita> entityList = new List<Cita>();
            entityList.Add(cita);

            var result = cita.put("CITA", $"FechaCita = '{cita.FechaCita}', IDEmpleado = {cita.IDEmpleado}, Sucursal = '{cita.Sucursal}', " +
                    $"Lavado ='{cita.Lavado}',IDCliente = {cita.IDCliente}",
                    $"Placa = {cita.Placa}");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {cita.Placa}");
        }

        // DELETE api/<CitaController>/5
        [HttpDelete("{placa}")]
        public async Task<ActionResult<Cita>> Delete(int placa)
        {
            List<Cita> entityList = new List<Cita>();
            var result = cita.delete("CITA", $"Placa = {placa}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {placa}");
        }

    }
}
