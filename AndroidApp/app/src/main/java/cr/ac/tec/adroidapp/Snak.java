package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Snak {
    @PrimaryKey
    public String NombreS;
    public int Cantidad;
    public int Costo;
}
