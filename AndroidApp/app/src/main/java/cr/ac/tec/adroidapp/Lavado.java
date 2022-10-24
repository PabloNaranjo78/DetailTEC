package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Lavado {
    @PrimaryKey
    @NonNull
    public String NombreLav;
    public float Duracion;
    public int Precio;
    public int Costo;
    public int Puntos;
//    public String Personal; Sepa judas porque personal

    /**
     * Representa la tabla del lavado
     * @param nombreLav Nombre de lavado
     * @param duracion Duracion del lavado
     * @param precio Precio del lavado
     * @param costo Costo del lavado
     * @param puntos Puntos de lavado
     */
    public Lavado(@NonNull String nombreLav, float duracion, int precio, int costo, int puntos) {
        this.NombreLav = nombreLav;
        this.Duracion = duracion;
        this.Precio = precio;
        this.Costo = costo;
        this.Puntos = puntos;
    }

    /**
     * Constructor
     */
    public Lavado() {
    }
}
