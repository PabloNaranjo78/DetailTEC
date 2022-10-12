using AndroidApp.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AndroidApp.Data
{
    static class DataManager
    {
        
        public static async void Dm_DeleteClient(int clientId)
        {
            var client = await App.SQLiteDB.GetClientById(clientId);
            await App.SQLiteDB.DeleteClient(client);
        }

        public static async void Dm_UpdateClient(int clientId, string name) 
        {
            var client = await App.SQLiteDB.GetClientById(clientId);

            Client newClient = new Client()
            {
                Id = client.Id,
                Name = name,
            };
            await App.SQLiteDB.UpdateClient(newClient);
        }

        public static async void Dm_InsertClient(int clientId, string name)
        {
            var client = await App.SQLiteDB.GetClientById(clientId);

            Client newClient = new Client()
            {
                Id = client.Id,
                Name = name,
            };
            await App.SQLiteDB.UpdateClient(newClient);
        }

        public static async void Dm_UpdatetClient()
        {
            var client = await App.SQLiteDB.GetClients();
            
        }
    }
}