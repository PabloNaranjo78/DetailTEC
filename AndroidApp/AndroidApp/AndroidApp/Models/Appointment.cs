using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class Appointment
    {
        [PrimaryKey]
        public int Placa { get; set; }
        public string FechaCita { get; set; }
        private int IDEmpleado { get; set; } 
        public string Sucursal { get; set; } // FK
        public string Lavado { get; set; } // FK
        public int IDClient { get; set; } //FK
    }
}
