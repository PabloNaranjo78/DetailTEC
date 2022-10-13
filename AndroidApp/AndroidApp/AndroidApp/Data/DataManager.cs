using AndroidApp.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Text;

namespace AndroidApp.Data
{
    static class DataManager
    {
        /// <summary>
        /// Delete an specific client
        /// </summary>
        /// <param name="clientId">Client to be deleted</param>
        public static async void Dm_DeleteClient(int clientId)
        {
            var client = await App.SQLiteDB.GetClientById(clientId);
            await App.SQLiteDB.DeleteClient(client);
        }

        /// <summary>
        /// Update the password of a client
        /// </summary>
        /// <param name="clientId">Client to be updated</param>
        /// <param name="contra">New password</param>
        public static async void Dm_UpdateClient(int clientId, string contra) 
        {
            var client = await App.SQLiteDB.GetClientById(clientId);

            Client newClient = new Client()
            {
                IDCliente = client.IDCliente,
                Usuario = client.Usuario,
                Contra = contra,
                Nombre = client.Nombre,
                Email = client.Email,
                PuntosDispo=client.PuntosDispo
            };
            await App.SQLiteDB.UpdateClient(newClient);
        }

        /// <summary>
        /// Inserts a new client to the table
        /// </summary>
        /// <param name="clientId">User id</param>
        /// <param name="usuario">User name</param>
        /// <param name="contra">User password</param>
        /// <param name="nombre">User name</param>
        /// <param name="email">User email</param>
        public static async void Dm_InsertClient(int clientId, string usuario, string contra, string nombre, string email)
        {
            Client newClient = new Client()
            {
                IDCliente = clientId,
                Usuario = usuario,
                Contra = contra,
                Nombre = nombre,
                Email = email,
                PuntosDispo = 0
            };
            await App.SQLiteDB.InsertClient(newClient);
        }

        // To be defined
        public static async void Dm_UpdatetClient()
        {
            var client = await App.SQLiteDB.GetClients();
        }
    }
}