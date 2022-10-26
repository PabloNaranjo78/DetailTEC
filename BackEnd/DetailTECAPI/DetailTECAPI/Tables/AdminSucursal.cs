using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class AdminSucursal:Entity<AdminSucursal>
    {
        [Key]
        public int IDTrabajador { get; set; }
        [Key]
        public string? Sucursal { get; set; }
        public string? FechaInicio { get; set; }

        public override AdminSucursal createEntity(SqlDataReader dr)
        {
            return new AdminSucursal
            {
                IDTrabajador = Convert.ToInt32(dr["IDTrabajador"]),
                Sucursal = dr["Sucursal"].ToString(),
                FechaInicio = dr["FechaInicio"].ToString()
            };
        }
    }
}
