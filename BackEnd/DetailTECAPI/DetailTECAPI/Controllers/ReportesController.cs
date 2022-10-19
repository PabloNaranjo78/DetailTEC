using DetailTECAPI.Tables;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data.SqlClient;
using System.Reflection.PortableExecutable;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DetailTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportesController : ControllerBase
    {
        private SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);
        private ReportePlanilla reportePlanilla = new ReportePlanilla();
        private TipoLavado tipoLavado = new TipoLavado();
        // GET: api/<ReportesController>
        [HttpGet]
        [Route("planilla/")]
        public async Task<ActionResult<List<ReportePlanilla>>> Get()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("SELECT IDTrabajador, TipoPago, Nombre + ' ' + Apellidos AS NombreCompleto, Lavado," +
                " COUNT(FechaCita) AS NumCitas, Costo, Costo*COUNT(FechaCita) AS MontoTotal FROM ((TRABAJADOR INNER JOIN CITA ON " +
                "IDTrabajador=IDEmpleado) INNER JOIN LAVADO ON Lavado=NombreLav) GROUP BY IDTrabajador, TipoPago, Nombre, Apellidos," +
                " Lavado, Costo ORDER BY IDTrabajador", connection);

                List<ReportePlanilla> reportePlanillaList = new List<ReportePlanilla>();

                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                reportePlanillaList = reportePlanilla.createEntityList(dr);
                return Ok(reportePlanillaList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }

        [HttpGet("tipoLavado/{id}")]
        public async Task<ActionResult<List<TipoLavado>>> Get(int id)
        {
            try
            {
                SqlCommand cmd = new SqlCommand($"SELECT    CLIENTE.IDCliente, Nombre, FechaCita, Lavado, Precio FROM" +
                    $" (CLIENTE INNER JOIN CITA ON (CLIENTE.IDCliente=CITA.IDCliente AND CLIENTE.IDCliente={id}))" +
                    $" INNER JOIN LAVADO ON Lavado=NombreLav ORDER BY Precio DESC", connection);

                List<TipoLavado> tipoLavadoList = new List<TipoLavado>();

                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                tipoLavadoList = tipoLavado.createEntityList(dr);
                return Ok(tipoLavadoList);
            }
            catch (Exception)
            {
                return BadRequest("No se logró conectar con la DB");

            }
        }



    }
}
