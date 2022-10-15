using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class Drinks
    {
        [PrimaryKey]
        public string Nombre { get; set; }
        public int Disponibles { get; set; }
        public int Costo { get; set; }      
    }
}
