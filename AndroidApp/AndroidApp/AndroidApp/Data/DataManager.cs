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
    }
}
//