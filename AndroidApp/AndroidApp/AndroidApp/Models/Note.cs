using System;
using System.Collections.Generic;
using System.Text;
using SQLite;

namespace AndroidApp.Models
{
    public class Note
    {
        [PrimaryKey, AutoIncrement]
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
