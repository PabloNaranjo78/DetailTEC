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
        /// <summary>
        /// Inserts a new client
        /// </summary>
        /// <param name="client">Client to be added</param>
        /// <returns></returns>
        public Task<int> InsertClient(Client client)
        {
            return db.InsertAsync(client);
        }

        /// <summary>
        /// Returns all the clients saved 
        /// </summary>
        /// <returns></returns>
        public Task<List<Client>> GetClients()
        {
            return db.Table<Client>().ToListAsync();
        }

        /// <summary>
        /// Returns a client by id
        /// </summary>
        /// <param name="idClient">id of the client</param>
        /// <returns></returns>
        public Task<Client> GetClientById(int idClient)
        {
            return db.Table<Client>().Where(a => a.IDCliente == idClient).FirstOrDefaultAsync();

        }

        /// <summary>
        /// Updates a client
        /// </summary>
        /// <param name="client">Client to be updated</param>
        /// <returns></returns>
        public Task<int> UpdateClient(Client client)
        {
            return db.UpdateAsync(client);
            
        }

        /// <summary>
        /// Deletes a client
        /// </summary>
        /// <param name="client">Client to be deleted</param>
        /// <returns></returns>
        public Task<int> DeleteClient(Client client) 
        {
            return db.DeleteAsync(client);
        }


    }
}
