using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class ReportePlanilla:Entity<ReportePlanilla>
    {
        public int IDTrabajador { get; set; }
        public string? TipoPago { get; set; }
        public string? NombreCompleto { get; set; }
        public string? Lavado { get; set; }
        public int NumCitas { get; set; }
        public int Costo { get; set; }
        public int MontoTotal { get; set; }

        public override ReportePlanilla createEntity(SqlDataReader dr)
        {
            return new ReportePlanilla { 
                IDTrabajador = Convert.ToInt32(dr["IDTrabajador"]),
                TipoPago = dr["TipoPago"].ToString(),
                NombreCompleto = dr["NombreCompleto"].ToString(),
                Lavado = dr["Lavado"].ToString(),
                NumCitas = Convert.ToInt32(dr["NumCitas"]),
                Costo = Convert.ToInt32(dr["Costo"]),
                MontoTotal = Convert.ToInt32(dr["MontoTotal"])
            };
        }
    }
}
