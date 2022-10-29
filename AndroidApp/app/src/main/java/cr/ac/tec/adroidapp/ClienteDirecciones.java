package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cliente.class, parentColumns = "IDCliente", childColumns = "IDCliente")},
        primaryKeys = {"IDCliente", "Provincia", "Canton", "Distrito"})

public class ClienteDirecciones {
    @NonNull
    public int IDCliente;
    @NonNull
    public String Provincia;
    @NonNull
    public String Canton;
    @NonNull
    public String Distrito;

    /**
     * Representa la tabla direcciones del cliente
     * @param IDCliente ID cliente
     * @param provincia Proviencia
     * @param canton Canton
     * @param distrito Distrito
     */
    public ClienteDirecciones(@NonNull int IDCliente,@NonNull String provincia,@NonNull String canton,@NonNull String distrito) {
        this.IDCliente = IDCliente;
        this.Provincia = provincia;
        this.Canton = canton;
        this.Distrito = distrito;
    }

    /**
     * Constructor
     */
    public ClienteDirecciones() {
    }
}