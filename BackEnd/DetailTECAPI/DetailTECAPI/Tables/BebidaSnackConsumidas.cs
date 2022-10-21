using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class BebidaSnackConsumidas:Entity<BebidaSnackConsumidas>
    {
        [Key]
        public int Factura { get; set; }
        [Key]
        public int Placa { get; set; }
        public int Cantidad { get; set; }
        [Key]
        public string? Nombre { get; set; }
        [Key]
        public string? Tipo { get; set; }

        public override BebidaSnackConsumidas createEntity(SqlDataReader dr)
        {
            return new BebidaSnackConsumidas
            {
                Factura = Convert.ToInt32(dr["Factura"]),
                Placa = Convert.ToInt32(dr["Placa"]),
                Cantidad = Convert.ToInt32(dr["Cantidad"]),
                Nombre = dr["Nombre"].ToString(),
                Tipo = dr["Tipo"].ToString()
            };
        }
    }
}
