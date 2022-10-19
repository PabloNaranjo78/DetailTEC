using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Insumo : Entity<Insumo>
    {
        [Key]
        public string? NombrePro { set; get; }
        [Key]
        public string? MarcaPro { set; get; }
        public int Costo { get; set; }

        public override Insumo createEntity(SqlDataReader dr)
        {
            return new Insumo()
            {
                NombrePro = dr["NombrePro"].ToString(),
                MarcaPro = dr["MarcaPro"].ToString(),
                Costo = Convert.ToInt32(dr["Costo"])
            };
        }

        
    }


}
