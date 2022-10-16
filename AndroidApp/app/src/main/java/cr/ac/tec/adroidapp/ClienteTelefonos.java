package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDCliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Telefono"})
public class ClienteTelefonos {
    public int IDCliente;
    public int Telefono;

    public ClienteTelefonos(int IDCliente, int telefono) {
        this.IDCliente = IDCliente;
        this.Telefono = telefono;
    }
}
