package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cita.class, parentColumns = "Placa", childColumns = "Placa")},
        primaryKeys = { "NumFactura"})
public class Factura {
    public int Placa;
    @NonNull
    public int NumFactura;
    public int Monto;

    public Factura(@NonNull int placa, @NonNull int numFactura, int monto) {
        this.Placa = placa;
        this.NumFactura = numFactura;
        this.Monto = monto;
    }

    public Factura() {
    }
}
