using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Sucursal : Entity<Sucursal>
    {
        public string? NombreSuc { get; set; }
        public string? FechaApert { get; set; }
        public int Telefono { set; get; }
        public string? Pronvincia { set; get; }
        public string? Canton { set; get; }
        public string? Distrito { set; get; }
        public int TiempoDispo { set; get; }
        public override Sucursal createEntity(SqlDataReader dr)
        {
            Sucursal entity = new Sucursal()
            {
                NombreSuc = dr["NombreSuc"].ToString(),
                FechaApert = dateFormat(dr,"FechaApert"),
                Telefono = Convert.ToInt32(dr["Telefono"]),
                Pronvincia = dr["Provincia"].ToString(),
                Canton = dr["Canton"].ToString(),
                Distrito = dr["Distrito"].ToString(),
                TiempoDispo = Convert.ToInt32(dr["TiempoDispo"])
            };
            return entity;
        }

        

    }
}
