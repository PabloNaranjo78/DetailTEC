package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cita.class, parentColumns = "Placa", childColumns = "Placa")},
        primaryKeys = {"Placa", "NumFactura"})
public class Factura {
    public int Placa;
    public int NumFactura;
    public int Monto;

    public Factura(int placa, int numFactura, int monto) {
        this.Placa = placa;
        this.NumFactura = numFactura;
        this.Monto = monto;
    }
}
