using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Trabajador:Entity<Trabajador>
    {
        [Key]
        public int IDTrabajador { get; set; }
        public string? Nacimiento { get; set; }
        public string? Contraseña { get; set; }
        public string? Rol { get; set; }
        public string? Nombre { get; set; }
        public string? Apellidos { get; set; }
        public string? FechaIngreso { get; set; }
        public string? TipoPago { get; set; }


        public override Trabajador createEntity(SqlDataReader dr)
        {
            Trabajador entity = new Trabajador()
            {
                IDTrabajador = Convert.ToInt32(dr["IDTrabajador"]),
                Nacimiento = dateFormat(dr,"Nacimiento"),
                Contraseña = dr["Contraseña"].ToString(),
                Rol = dr["Rol"].ToString(),
                Nombre = dr["Nombre"].ToString(),
                Apellidos = dr["Apellidos"].ToString(),
                FechaIngreso = dateFormat(dr,"FechaIngreso"),
                TipoPago = dr["TipoPago"].ToString()
            };
            return entity;
        }
    }
}
