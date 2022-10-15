using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class Receipt
    {
        [PrimaryKey]
        public int NumFactura { get; set; }
        public int Placa { get; set; } // Ask for licence plate and receipt number
        public int Monto { get; set; }
    }
}
