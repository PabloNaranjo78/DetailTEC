using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class PuntosRedem:Entity<PuntosRedem>
    {
        public string? NombreCompleto { get; set; }
        public int PuntosRedm { get; set; }

        public override PuntosRedem createEntity(SqlDataReader dr)
        {
            return new PuntosRedem { 
            
                NombreCompleto = dr["NombreCompleto"].ToString(),
                PuntosRedm = Convert.ToInt32(dr["PuntosRedm"])
            };
        }
    }
}
