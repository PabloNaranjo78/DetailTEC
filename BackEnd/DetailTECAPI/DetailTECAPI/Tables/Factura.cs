using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Factura:Entity<Factura>
    {
        [Key]
        public string? Placa { get; set; }
        [Key]
        public int NumFactura { get; set; }
        public int Monto { get; set; }

        public override Factura createEntity(SqlDataReader dr)
        {
            return new Factura()
            {
                Placa = dr["Placa"].ToString(),
                NumFactura = Convert.ToInt32(dr["NumFactura"]),
                Monto = Convert.ToInt32(dr["Monto"])
            }; 
        }
    }
}
