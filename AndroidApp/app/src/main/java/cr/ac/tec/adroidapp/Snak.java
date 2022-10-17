package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Snak {
    @PrimaryKey
    @NonNull
    public String NombreS;
    public int Cantidad;
    public int Costo;

    public Snak(@NonNull String nombreS, int cantidad, int costo) {
        this.NombreS = nombreS;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }

    public Snak() {
    }
}
