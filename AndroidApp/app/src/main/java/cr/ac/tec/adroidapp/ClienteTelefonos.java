package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDCliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Telefono"})
public class ClienteTelefonos {
    @NonNull
    public int IDCliente;
    @NonNull
    public int Telefono;

    public ClienteTelefonos(@NonNull int IDCliente, @NonNull int telefono) {
        this.IDCliente = IDCliente;
        this.Telefono = telefono;
    }

    public ClienteTelefonos() {
    }
}
