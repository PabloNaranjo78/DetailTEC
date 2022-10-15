using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class Washed
    {
        [PrimaryKey]
        public string NombreLavado { get; set; }
        public string Duracion { get; set; } // Ask for data type 
        public int Precio { get; set; }
        public int Costo { get; set; }
        public int Puntos { get; set; }
    }
}
