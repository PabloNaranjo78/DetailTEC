package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Cita.class, parentColumns = "Placa", childColumns = "Placa")},
        primaryKeys = { "NumFactura"})


public class Factura {
    public String Placa;
    @NonNull
    public int NumFactura;
    public int Monto;

    /**
     * Representa la tabla de una factura
     * @param placa placa de la  factura
     * @param numFactura numero de factura
     * @param monto monto de la factura
     */
    public Factura(@NonNull String placa, @NonNull int numFactura, int monto) {
        this.Placa = placa;
        this.NumFactura = numFactura;
        this.Monto = monto;
    }

    /**
     * Contructor
     */
    public Factura() {
    }
}
