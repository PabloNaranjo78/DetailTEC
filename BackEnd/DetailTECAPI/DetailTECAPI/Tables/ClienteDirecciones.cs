using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class ClienteDirecciones : Entity<ClienteDirecciones>
    {
        [Key]
        public int IDCliente { get; set; }
        [Key]
        public string? Provincia { get; set; }
        [Key]
        public string? Canton { get; set; }
        [Key]
        public string? Distrito { get; set; }

        public override ClienteDirecciones createEntity(SqlDataReader dr)
        {
            return new ClienteDirecciones
            {
                IDCliente = Convert.ToInt32(dr["IDCliente"]),
                Provincia = dr["Provincia"].ToString(),
                Canton = dr["Canton"].ToString(),
                Distrito = dr["Distrito"].ToString(),
            };
        }
    }
}
