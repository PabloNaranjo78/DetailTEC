using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturaController : ControllerBase
    {

        private Factura factura = new Factura();
        // GET: api/<FacturaController>
        [HttpGet]
        public async Task<ActionResult<List<Factura>>> Get()
        {
            try
            {
                var entitylist = factura.get("Placa,NumFactura,Monto", "Factura");
                return Ok(entitylist);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<FacturaController>/5
        [HttpGet("{placa}/{numFactura}")]
        public async Task<ActionResult<List<Factura>>> Get(int placa, int numFactura)
        {
            try
            {
                var entityList = factura.get($"{placa} AND NumFactura = {numFactura}", "Placa", "Placa,NumFactura,Monto", "FACTURA");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        // POST api/<FacturaController>
        [HttpPost]
        public async Task<ActionResult<List<Factura>>> Post(Factura factura)
        {
            List<Factura> entityList = new List<Factura>();
            entityList.Add(factura);

            var result = factura.post("FACTURA", $"{factura.Placa}, {factura.NumFactura},{factura.Monto}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {factura.NumFactura}");

        }

        // POST api/<FacturaController>
        [HttpPost("app/{json}")]
        public async Task<ActionResult<List<Factura>>> PostAdroid(string json)
        {
            var factura = JsonConvert.DeserializeObject<Factura>(json);
            List<Factura> entityList = new List<Factura>();
            entityList.Add(factura);

            var result = factura.post("FACTURA", $"{factura.Placa}, {factura.NumFactura},{factura.Monto}");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar a {factura.NumFactura}");

        }

        // PUT api/<FacturaController>/5
        [HttpPut]
        public async Task<ActionResult<Factura>> Put(Factura factura)
        {

            List<Factura> entityList = new List<Factura>();
            entityList.Add(factura);

            var result = factura.put("FACTURA", $"Monto = {factura.Monto}", $"Placa = {factura.Placa} AND NumFactura = {factura.NumFactura}");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {factura.NumFactura}");
        }

        // PUT api/<FacturaController>/5
        [HttpPut("app/{json}")]
        public async Task<ActionResult<Factura>> PutAndroid(string json)
        {

            var factura = JsonConvert.DeserializeObject<Factura>(json);
            List<Factura> entityList = new List<Factura>();
            entityList.Add(factura);

            var result = factura.put("FACTURA", $"Monto = {factura.Monto}", $"Placa = {factura.Placa} AND NumFactura = {factura.NumFactura}");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar a {factura.NumFactura}");
        }

        // DELETE api/<FacturaController>/5
        [HttpDelete("{placa}/{numFactura}")]
        public async Task<ActionResult<Factura>> Delete(int placa, int numFactura)
        {
            List<Factura> entityList = new List<Factura>();
            var result = factura.delete("FACTURA", $"Placa = {placa} AND NumFactura = {numFactura}");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar a {numFactura}");
        }
    }
}
