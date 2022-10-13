using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace AndroidApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Menu : ContentPage
    {
        public Menu()
        {
            InitializeComponent();
            //Apellido.Text = Application.Current.Properties["Nombre"].ToString();

        }

        private void Button_Client(object sender, EventArgs e)
        {
            //Application.Current.Properties["Nombre"] = "FERNANDO";
            Navigation.PushAsync(new ClientM());

        }

        private void Button_Appointment(object sender, EventArgs e)
        {
            //Application.Current.Properties["Nombre"] = "FERNANDO";
            Navigation.PushAsync(new Appointment());

        }
        private void Button_Points(object sender, EventArgs e)
        {
            //Application.Current.Properties["Nombre"] = "FERNANDO";
            Navigation.PushAsync(new Points());

        }
    }
}