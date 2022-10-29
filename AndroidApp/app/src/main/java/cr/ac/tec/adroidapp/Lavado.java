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
    public int PuntosOtorgar;


    /**
     * Representa la tabla del lavado
     * @param nombreLav Nombre de lavado
     * @param duracion Duracion del lavado
     * @param precio Precio del lavado
     * @param costo Costo del lavado
     * @param puntos Puntos de lavado
     */
    public Lavado(@NonNull String nombreLav, float duracion, int precio, int costo, int puntos, int puntosOtorgar) {
        this.NombreLav = nombreLav;
        this.Duracion = duracion;
        this.Precio = precio;
        this.Costo = costo;
        this.Puntos = puntos;
        this.PuntosOtorgar = puntosOtorgar;
    }

    /**
     * Constructor
     */
    public Lavado() {
    }
}
