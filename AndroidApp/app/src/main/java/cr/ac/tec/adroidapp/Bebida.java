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

    /**
     * Representa la tabla de bebida
     * @param nombreB nombre de la bebida
     * @param cantidad cantidad de bebidas
     * @param costo costo de la bebida
     */
    public Bebida(@NonNull String nombreB, int cantidad, int costo) {
        this.NombreB = nombreB;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }

    /**
     * Constructor
     */
    public Bebida() {
    }
}
