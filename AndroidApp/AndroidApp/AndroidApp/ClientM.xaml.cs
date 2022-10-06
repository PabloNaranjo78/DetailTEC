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
    public partial class ClientM : ContentPage
    {
        public ClientM()
        {
            InitializeComponent();
            UserName.Text = Application.Current.Properties["Name"].ToString();
        }
    }
}