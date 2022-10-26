using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Runtime.CompilerServices;
using DetailTECAPI.Connection;

namespace DetailTECAPI.Tables
{
    public class Cliente : Entity<Cliente>
    {

        [Key]
        public int IDCliente { get; set; }
        [Key]
        public string? Usuario { get; set; }
        public string? Contraseña { get; set; }
        public string? InfoContacto { get; set; }
        public string? Nombre { get; set; }
        public string? email { get; set; }
        public int PuntosDispo { get; set; }

        
        public override Cliente createEntity(SqlDataReader dr)
        {
            return new Cliente()
            {
                IDCliente = Convert.ToInt32(dr["IDcliente"]),
                Usuario = dr["Usuario"].ToString(),
                Contraseña = dr["Contraseña"].ToString(),
                InfoContacto = dr["InfoContacto"].ToString(),
                Nombre = dr["Nombre"].ToString(),
                email = dr["email"].ToString(),
                PuntosDispo = Convert.ToInt32(dr["PuntosDispo"])
            }; 
        }

    }
}

