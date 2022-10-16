package cr.ac.tec.adroidapp;

import androidx.room.PrimaryKey;

public class Bebida {
    @PrimaryKey
    public String NombreB;
    public int Cantidad;
    public int Costo;

    public Bebida(String nombreB, int cantidad, int costo) {
        this.NombreB = nombreB;
        this.Cantidad = cantidad;
        this.Costo = costo;
    }
}
