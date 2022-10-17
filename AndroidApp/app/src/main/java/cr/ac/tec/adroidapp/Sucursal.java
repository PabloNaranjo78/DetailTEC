package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Sucursal {
    @PrimaryKey
    @NonNull
    public String NombreSuc;
    public String FechaApert;
    public int Telefono;
    public String Provincia;
    public String Canton;
    public String Distrito;
    public float TiempoDispo;

    public Sucursal(@NonNull String nombreSuc, String fechaApert, int telefono, String provincia, String canton, String distrito, float tiempoDispo) {
        this.NombreSuc = nombreSuc;
        this.FechaApert = fechaApert;
        this.Telefono = telefono;
        this.Provincia = provincia;
        this.Canton = canton;
        this.Distrito = distrito;
        this.TiempoDispo = tiempoDispo;
    }

    public Sucursal() {
    }
}
