using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Models
{
    public class ClientAddress
    {
        public int IDCliente { get; set; } // FK
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
    }
}
