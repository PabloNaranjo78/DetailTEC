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
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
