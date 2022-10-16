package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Sucursal {
    @PrimaryKey
    public String NombreSuc;
    public String FechaApert;
    public int Telefono;
    public String Provincia;
    public String Canton;
    public String Distrito;
    public float TiempoDispo;
}
