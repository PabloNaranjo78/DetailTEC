using System;
using System.Collections.Generic;
using System.Text;
using SQLite;

namespace AndroidApp.Models
{
    public class Client
    {
        [PrimaryKey]
        //[PrimaryKey, AutoIncrement]
        public int IDCliente { get; set; }
        public string Usuario { get; set; }
        public string Contra { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }
        public int PuntosDispo { get; set; }

    }
}
