using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BebidaSnackConsumidasController : ControllerBase
    {

        private BebidaSnackConsumidas bebidasConsumidas = new();
        // GET: api/<BebidasConsumidasController>
        [HttpGet]
        public async Task<ActionResult<List<BebidaSnackConsumidas>>> Get()
        {
            try
            {
                var entityList = bebidasConsumidas.get("Factura,Cantidad,Nombre,Placa,Tipo", "BEBIDA_SNACK_CONSUMIDOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        // GET api/<BebidasConsumidasController>/5
        [HttpGet("{factura}/{tipo}")]
        public async Task<ActionResult<List<BebidaSnackConsumidas>>> Get(int factura, string tipo)
        {
            try
            {
                var entityList = bebidasConsumidas.get(factura.ToString() + $" AND Tipo = '{tipo}'", $"Factura",
                    "Factura,Cantidad,Nombre,Placa,Tipo", "BEBIDA_SNACK_CONSUMIDOS");
                return Ok(entityList);
            }
            catch (Exception)
            {
                return BadRequest("No se encontró");

            }

        }

        


        // POST api/<BebidasConsumidasController>
        [HttpPost]
        public async Task<ActionResult<List<BebidaSnackConsumidas>>> Post(BebidaSnackConsumidas bebidasConsumidas)
        {
            List<BebidaSnackConsumidas> entityList = new();
            entityList.Add(bebidasConsumidas);

            var result = bebidasConsumidas.post("BEBIDA_SNACK_CONSUMIDOS", $"{bebidasConsumidas.Factura}," +
                $"{bebidasConsumidas.Cantidad},'{bebidasConsumidas.Nombre}', {bebidasConsumidas.Placa}, '{bebidasConsumidas.Tipo}'");

            return result ? Ok(entityList) : BadRequest($"No se logró agregar la bebida {bebidasConsumidas.Nombre}");

        }

        // PUT api/<BebidasConsumidasController>/5
        [HttpPut]
        public async Task<ActionResult<BebidaSnackConsumidas>> Put(BebidaSnackConsumidas bebidasConsumidas)
        {

            List<BebidaSnackConsumidas> entityList = new();
            entityList.Add(bebidasConsumidas);

            var result = bebidasConsumidas.put("BEBIDA_SNACK_CONSUMIDOS", $"Cantidad = {bebidasConsumidas.Cantidad}", 
                $"Factura = {bebidasConsumidas.Factura} AND Nombre = '{bebidasConsumidas.Nombre}' AND" +
                $" Placa = {bebidasConsumidas.Placa} AND Tipo = '{bebidasConsumidas.Tipo}'");

            return result ? Ok(entityList) : BadRequest($"No se logró modificar la bebida de {bebidasConsumidas.Factura}");
        }

        // DELETE api/<BebidasConsumidasController>/5
        [HttpDelete("{factura}/{placa}/{nombre}/{tipo}")]
        public async Task<ActionResult<BebidaSnackConsumidas>> Delete(int factura, int placa, string nombre, string tipo)
        {
            List<BebidaSnackConsumidas> entityList = new();
            var result = bebidasConsumidas.delete("BEBIDA_SNACK_CONSUMIDOS", $"Factura = {factura} AND Placa = {placa} AND " +
                $"Nombre = '{nombre}' AND Tipo = '{tipo}'");
            return result ? Ok(entityList) : BadRequest($"No se logró eliminar la bebida {nombre} de {factura}");
        }
    }
}
