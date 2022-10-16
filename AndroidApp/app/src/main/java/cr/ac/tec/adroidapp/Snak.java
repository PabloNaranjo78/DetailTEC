package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Snak {
    @PrimaryKey
    public String NombreS;
    public int Cantidad;
    public int Costo;

    public Snak(String nombreS, int cantidad, int costo) {
        this.NombreS = nombreS;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }
}
