using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class ClienteTelefonos : Entity<ClienteTelefonos>
    {
        [Key]
        public int IDCliente { get; set; }
        [Key]
        public int Telefono { get; set; }

        public override ClienteTelefonos createEntity(SqlDataReader dr)
        {
            return new ClienteTelefonos {
                IDCliente = Convert.ToInt32(dr["IDCliente"]),
                Telefono = Convert.ToInt32(dr["Telefono"]),
            };
        }
    }
}
