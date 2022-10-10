using System;
using System.Collections.Generic;
using System.Text;
using SQLite;
using AndroidApp.Models;
using System.Threading.Tasks;
using System.Dynamic;

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

        public Task<int> SaveClientAsync(Client client)
        {
            if (client.Id != 0)
            {
                return db.InsertAsync(client);

            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Returns all the clients saved 
        /// </summary>
        /// <returns></returns>
        public Task<List<Client>> GetClientAsync()
        {
            return db.Table<Client>().ToListAsync();
        }

        /// <summary>
        /// Returns a client by id
        /// </summary>
        /// <param name="idClient">id of the client</param>
        /// <returns></returns>
        public Task<Client> GetClientByIdAsync(int idClient)
        {
            return db.Table<Client>().Where(a => a.Id == idClient).FirstOrDefaultAsync();

        }

    }
}
