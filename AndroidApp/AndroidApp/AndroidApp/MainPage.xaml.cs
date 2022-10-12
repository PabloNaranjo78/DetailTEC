using AndroidApp.Models;
using AndroidApp.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace AndroidApp
{
    public partial class MainPage : ContentPage
    {
        
        public MainPage()
        {
            InitializeComponent();
            showClient2();

        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            //Application.Current.Properties["Name"] = "FERNANDO";
            //Navigation.PushAsync(new Menu());

            if (!string.IsNullOrEmpty(UserEntry.Text) & !string.IsNullOrEmpty(UserPass.Text))
            {                
                //Client client = new Client
                //{
                //    Id = int.Parse(UserEntry.Text),
                //    Name = UserPass.Text   
                //}; 
                //await App.SQLiteDB.SaveClientAsync(client); 

                await DisplayAlert("Regist", "User have been saved", "Ok"); 
            }
            else
            {
                await DisplayAlert("Advertencia", "Fill all the places", "Ok");
            }

        }

        public async void showClient()
        {
            var clientList = await App.SQLiteDB.GetClientById(999);

            Client clientaux = new Client()
            {
                Id = clientList.Id,
                Name = "FERNADO MONGE",
            };

            await App.SQLiteDB.UpdateClient(clientaux);  

            var clientList2 = await App.SQLiteDB.GetClients();
            lstClient.ItemsSource = clientList2;
        }
        public async void showClient2()
        {
            var clientList2 = await App.SQLiteDB.GetClients();
            lstClient.ItemsSource = clientList2;
        }
 
    }
}
