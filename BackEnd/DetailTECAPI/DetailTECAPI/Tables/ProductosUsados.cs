using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class ProductosUsados : Entity<ProductosUsados>
    {
        [Key]
        public string? NombrePro { get; set; }
        [Key]
        public string? MarcaPro { get; set; }
        [Key]
        public string? Lavado { get; set; }

        public override ProductosUsados createEntity(SqlDataReader dr)
        {
            return new ProductosUsados
            {
                NombrePro = dr["NombrePro"].ToString(),
                MarcaPro = dr["MarcaPro"].ToString(),
                Lavado = dr["Lavado"].ToString()
            };
        }
    }
}
