using AndroidApp.Models;
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
        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            //Application.Current.Properties["Name"] = "FERNANDO";
            //Navigation.PushAsync(new Menu());

            if (!string.IsNullOrEmpty(UserEntry.Text) & !string.IsNullOrEmpty(UserPass.Text))
            {
                
                Client client = new Client
                {
                    Id = int.Parse(UserEntry.Text),
                    Name = UserPass.Text   
                }; 
                await App.SQLiteDB.SaveClientAsync(client); 
                UserEntry.Text = "";
                UserPass.Text = "";
                await DisplayAlert("Regist", "User have been saved", "Ok");

                Console.WriteLine("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                Console.WriteLine(await App.SQLiteDB.GetClientByIdAsync(1238));
                Console.WriteLine("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

            }
            else
            {
                await DisplayAlert("Advertencia", "Fill all the places", "Ok");
            }

        }

    }
}
