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

        //public int IDEmpleado { get; set; } -> Ask if its needed
        public string Sucursal { get; set; } // FK
        public string Lavado { get; set; } // FK
        public int IDClient { get; set; } //FK
    }
}
