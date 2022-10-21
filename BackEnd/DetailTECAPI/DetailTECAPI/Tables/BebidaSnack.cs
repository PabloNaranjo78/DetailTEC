using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class BebidaSnack:Entity<BebidaSnack>
    {
        [Key]
        public string? Nombre { get; set; }
        public int Cantidad { get; set; }
        public int Costo { get; set; }
        [Key]
        public string? Tipo { get; set; }

        public override BebidaSnack createEntity(SqlDataReader dr)
        {
            return new BebidaSnack
            {
                Nombre = dr["Nombre"].ToString(),
                Cantidad = Convert.ToInt32(dr["Cantidad"]),
                Costo = Convert.ToInt32(dr["Costo"]),
                Tipo = dr["Tipo"].ToString()
            };
        }

    }
}
