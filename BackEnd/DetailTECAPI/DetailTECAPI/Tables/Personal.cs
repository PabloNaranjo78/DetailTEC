using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Personal:Entity<Personal>
    {
        [Key]
        public int IDTrabajador { get; set; }
        [Key]
        public string? Lavado { get; set; }

        public override Personal createEntity(SqlDataReader dr)
        {
            return new Personal
            {
                IDTrabajador = Convert.ToInt32(dr["IDTrabajador"]),
                Lavado = dr["Lavado"].ToString()
            };
        }
    }
}
