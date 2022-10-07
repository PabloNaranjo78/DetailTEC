using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Cliente
    {

        [Key]
        public int IDcliente { get; set; }
        [Key]
        public string? Usuario { get; set; }
        public string? Contraseña { get; set; }
        public string? InfoContacto { get; set; }
        public string? Nombre { get; set; }
        public string? email { get; set; }
        public int PuntosDispo { get; set; }

        public static List<Cliente> createClienteList(SqlDataReader dr)
        {
            List<Cliente> clienteList = new List<Cliente>();
            while (dr.Read())
            {
                clienteList.Add(Cliente.createCliente(dr));
            };

            return clienteList;
        }

        public static Cliente createCliente(SqlDataReader dr)
        {
            Cliente cliente = new Cliente
            {
                IDcliente = Convert.ToInt32(dr["IDcliente"]),
                Usuario = dr["Usuario"].ToString(),
                Contraseña = dr["Contraseña"].ToString(),
                InfoContacto = dr["InfoContacto"].ToString(),
                Nombre = dr["Nombre"].ToString(),
                email = dr["email"].ToString(),
                PuntosDispo = Convert.ToInt32(dr["PuntosDispo"])
            };
            return cliente;
        }

    }
}

