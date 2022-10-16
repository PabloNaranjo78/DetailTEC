package cr.ac.tec.adroidapp;

import androidx.room.Entity;

@Entity(primaryKeys = {"IDcliente","Usuario"})
public class Cliente {
    public int IDcliente;
    public String Usuario;
    public String Contraseñañ;
    public String InfoContacto;
    public String Nombre;
    public String email;
    public int PuntosDispo;
}
