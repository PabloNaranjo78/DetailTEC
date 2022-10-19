using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Cita:Entity<Cita>
    {
        public string? Placa { get; set; }
        public string? FechaCita { get; set; }
        public int IDEmpleado { get; set; }
        public string Sucursal { get; set; }
        public string? Lavado { get; set; }
        public int IDCliente { get; set; }

        public override Cita createEntity(SqlDataReader dr)
        {
            return new Cita { 
                Placa = dr["Placa"].ToString(),
                FechaCita= dateFormat(dr,"Placa"),
                IDEmpleado = Convert.ToInt32(dr["IDEempleado"]),
                Sucursal = dr["Sucursal"].ToString(),
                IDCliente = Convert.ToInt32(dr["IDCliente"])
            };
        }
    }
}
