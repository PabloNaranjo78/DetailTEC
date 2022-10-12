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
            RefreshClient();

        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            //Application.Current.Properties["Name"] = "FERNANDO";
            //Navigation.PushAsync(new Menu());

            if (!string.IsNullOrEmpty(UserEntry.Text) & !string.IsNullOrEmpty(UserPass.Text))
            {                
                
                await DisplayAlert("Regist", "User have been saved", "Ok"); 
            }
            else
            {
                await DisplayAlert("Advertencia", "Fill all the places", "Ok");
            }

        }

       
        public async void RefreshClient()
        {
            lstClient.ItemsSource = await App.SQLiteDB.GetClients();
        }
 
    }
}
