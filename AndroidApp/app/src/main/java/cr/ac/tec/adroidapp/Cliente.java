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

    /**
     * Representa la tabla de cliente
     * @param IDCliente ID del cliente
     * @param usuario Usuario del cliente
     * @param contraseña Contraseña del cliente
     * @param infoContacto Informacion de contacto
     * @param nombre Nombre del cliente
     * @param Email Email del cliente
     * @param puntosDispo puntos del cliente
     */
    public Cliente(@NonNull int IDCliente, @NonNull String usuario, String contraseña, String infoContacto, String nombre, String Email, int puntosDispo) {
        this.IDCliente = IDCliente;
        this.Usuario = usuario;
        this.Contraseña = contraseña;
        this.InfoContacto = infoContacto;
        this.Nombre = nombre;
        this.Email = Email;
        this.PuntosDispo = puntosDispo;
    }

    /**
     * Constructor
     */
    public Cliente() {
    }
}
