using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public class Sucursal : Entity<Sucursal>
    {
        string? NombreSuc { get; set; }
        DateTime? FechaApert { get; set; }
        int Telefono { set; get; }
        string Pronvincia { set; get; }
        string Canton { set; get; }
        int DiempoDispo { set; get; }
        public override Sucursal createEntity(SqlDataReader dr)
        {
            Sucursal entity = new Sucursal()
            {
               

            };
            return entity;
        }

    }
}
