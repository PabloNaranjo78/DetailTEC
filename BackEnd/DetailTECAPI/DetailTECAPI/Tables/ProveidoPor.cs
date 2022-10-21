using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class ProveidoPor:Entity<ProveidoPor>
    {
        [Key]
        public string? NombrePro { get; set; }
        [Key]
        public string? MarcaPro { get; set; }
        [Key]
        public int Proveedor { get; set; }

        public override ProveidoPor createEntity(SqlDataReader dr)
        {
            return new ProveidoPor
            {
                NombrePro = dr["NombrePro"].ToString(),
                MarcaPro = dr["MarcaPro"].ToString(),
                Proveedor = Convert.ToInt32(dr["Proveedor"])
            };
        }
    }
}
