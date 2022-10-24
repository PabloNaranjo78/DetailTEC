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

    /**
     * Representa la tabla de un snak
     * @param nombreS Nombre del snak
     * @param cantidad Canridad de snaks
     * @param costo Costo del snak
     */
    public Snak(@NonNull String nombreS, int cantidad, int costo) {
        this.NombreS = nombreS;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }

    /**
     * Constructor
     */
    public Snak() {
    }
}
