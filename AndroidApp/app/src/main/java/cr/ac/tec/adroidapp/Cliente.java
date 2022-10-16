package cr.ac.tec.adroidapp;

import androidx.room.Entity;

@Entity(primaryKeys = {"IDCliente","Usuario"})
public class Cliente {
    public int IDCliente;
    public String Usuario;
    public String Contraseñañ;
    public String InfoContacto;
    public String Nombre;
    public String email;
    public int PuntosDispo;

    public Cliente(int IDCliente, String usuario, String contraseñañ, String infoContacto, String nombre, String email, int puntosDispo) {
        this.IDCliente = IDCliente;
        this.Usuario = usuario;
        this.Contraseñañ = contraseñañ;
        this.InfoContacto = infoContacto;
        this.Nombre = nombre;
        this.email = email;
        this.PuntosDispo = puntosDispo;
    }
}
