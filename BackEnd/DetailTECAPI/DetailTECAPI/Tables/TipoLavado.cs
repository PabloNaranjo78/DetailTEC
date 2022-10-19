using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class TipoLavado:Entity<TipoLavado>
    {
        public int IDCliente { get; set; }
        public string? Nombre { get; set; }
        public string? FechaCita { get; set; }
        public string? Lavado { get; set; }
        public int Precio { get; set; }

        public override TipoLavado createEntity(SqlDataReader dr)
        {
            return new TipoLavado
            {
                IDCliente = Convert.ToInt32(dr["IDCliente"]),
                Nombre = dr["Nombre"].ToString(),
                FechaCita = dateFormat(dr,"FechaCita"),
                Lavado = dr["Lavado"].ToString(),
                Precio = Convert.ToInt32(dr["Precio"])
            };
        }
    }
}
