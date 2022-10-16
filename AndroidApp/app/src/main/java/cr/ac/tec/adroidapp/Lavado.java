package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Lavado {
    @PrimaryKey
    public String NombreLav;
    public float Duracion;
    public int Precio;
    public int Costo;
    public int Puntos;
//    public String Personal; Sepa judas porque personal

    public Lavado(String nombreLav, float duracion, int precio, int costo, int puntos) {
        this.NombreLav = nombreLav;
        this.Duracion = duracion;
        this.Precio = precio;
        this.Costo = costo;
        this.Puntos = puntos;
    }
}
