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
//    public String Perosnal; Sepa judas porque personal
}
