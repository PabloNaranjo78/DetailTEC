﻿using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SucursalController : ControllerBase
    {
        Sucursal sucursal = new Sucursal();

        // GET: api/<SucursalController>
        [HttpGet]
        public async Task<ActionResult<List<Sucursal>>> Get()
        {
            try
            {
                var entityList = sucursal.get("*", "Sucursal");
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
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SucursalController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SucursalController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}