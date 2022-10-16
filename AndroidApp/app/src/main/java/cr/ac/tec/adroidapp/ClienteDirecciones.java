package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDCliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Provincia", "Canton", "Distrito"})

public class ClienteDirecciones {
    public int IDCliente;
    public String Provincia;
    public String Canton;
    public String Distrito;

    public ClienteDirecciones(int IDCliente, String provincia, String canton, String distrito) {
        this.IDCliente = IDCliente;
        this.Provincia = provincia;
        this.Canton = canton;
        this.Distrito = distrito;
    }
}
