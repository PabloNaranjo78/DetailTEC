package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDcliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Telefono"})
public class ClienteTelefonos {
    public int IDCliente;
    public int Telefono;
}
