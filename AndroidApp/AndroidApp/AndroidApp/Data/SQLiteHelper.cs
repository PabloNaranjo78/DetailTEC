using System;
using System.Collections.Generic;
using System.Text;
using SQLite;
using AndroidApp.Models;

namespace AndroidApp.Data
{
    public class SQLiteHelper
    {
        SQLiteAsyncConnection db;

        public SQLiteHelper(string dbPath) 
        {
            db = new SQLiteAsyncConnection(dbPath);
            db.CreateTableAsync<Client>().Wait();
        }

    }
}
