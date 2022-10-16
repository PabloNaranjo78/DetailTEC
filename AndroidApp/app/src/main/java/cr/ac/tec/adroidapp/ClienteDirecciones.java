package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDcliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Provincia", "Canton", "Distrito"})

public class ClienteDirecciones {
    public int IDCliente;
    public String Provincia;
    public String Canton;
    public String Distrito;
}
