using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Lavado : Entity<Lavado>
    {
        [Key]
        public string? NombreLav { set; get; }
        public int Duracion { set; get; }
        public int Precio { set; get; }
        public int Costo { set; get; }
        public int Puntos { set; get; }

        public override Lavado createEntity(SqlDataReader dr)
        {
            Lavado lavado = new Lavado
            {
                NombreLav = dr["NombreLav"].ToString(),
                Duracion = Convert.ToInt32(dr["Duracion"]),
                Precio = Convert.ToInt32(dr["Precio"]),
                Costo = Convert.ToInt32(dr["Costo"]),
                Puntos = Convert.ToInt32(dr["Puntos"]),

            };
            return lavado;
        }
    }
}
