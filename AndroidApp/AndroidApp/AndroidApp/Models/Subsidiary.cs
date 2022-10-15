using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class Subsidiary
    {
        [PrimaryKey]
        public string NombreSuc { get; set; }
        public string FechaApert { get; set; }
        public int Telefono { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
        public int TiempoDispo { get; set; }
    }
}
