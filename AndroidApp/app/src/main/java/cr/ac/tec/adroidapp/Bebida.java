package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;
@Entity
public class Bebida {
    @PrimaryKey
    @NonNull
    public String NombreB;
    public int Cantidad;
    public int Costo;

    public Bebida(@NonNull String nombreB, int cantidad, int costo) {
        this.NombreB = nombreB;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }

    public Bebida() {
    }
}
