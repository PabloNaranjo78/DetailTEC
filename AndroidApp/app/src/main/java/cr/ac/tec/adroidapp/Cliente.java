package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;

@Entity(primaryKeys = {"IDCliente"})
public class Cliente {
    @NonNull
    public int IDCliente;
    public String Usuario;
    public String Contraseña;
    public String InfoContacto;
    public String Nombre;
    public String Email;
    public int PuntosDispo;

    public Cliente(@NonNull int IDCliente, @NonNull String usuario, String contraseña, String infoContacto, String nombre, String Email, int puntosDispo) {
        this.IDCliente = IDCliente;
        this.Usuario = usuario;
        this.Contraseña = contraseña;
        this.InfoContacto = infoContacto;
        this.Nombre = nombre;
        this.Email = Email;
        this.PuntosDispo = puntosDispo;
    }

    public Cliente() {
    }
}
