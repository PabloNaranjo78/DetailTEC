using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Proveedor:Entity<Proveedor>
    {
        [Key]
        public int CedulaJur { get; set; }
        public string? Nombre { get; set; }
        public string? Email { get; set; }
        public string? Contacto { get; set; }
        public string? Direccion { get; set; }

        public override Proveedor createEntity(SqlDataReader dr)
        {
            Proveedor proveedor = new Proveedor
            {
                CedulaJur = Convert.ToInt32(dr["CedulaJur"]),
                Nombre = dr["Nombre"].ToString(),
                Email = dr["Email"].ToString(),
                Contacto = dr["Contacto"].ToString(),
                Direccion = dr["Direccion"].ToString()
            };
            return proveedor;
        }
    }

    


}
