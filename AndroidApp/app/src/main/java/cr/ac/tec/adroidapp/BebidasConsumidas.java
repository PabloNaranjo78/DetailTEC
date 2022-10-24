package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Factura.class, parentColumns = "NumFactura", childColumns = "Factura"),
                        @ForeignKey(entity = Bebida.class, parentColumns = "NombreB", childColumns = "NombreB")},
        primaryKeys = {"Factura", "NombreB"})
public class BebidasConsumidas {
    @NonNull
    public int Factura;
    public int Cantidad;
    @NonNull
    public int NombreB;

    /**
     * Representa la tabla de bebidas consumidas
     * @param factura factura de la bebida
     * @param cantidad cantidad de bebidas
     * @param nombreB nombre de la bebida
     */
    public BebidasConsumidas(@NonNull int factura, int cantidad, @NonNull int nombreB) {
        this.Factura = factura;
        this.Cantidad = cantidad;
        this.NombreB = nombreB;
    }

    public BebidasConsumidas() {
    }
}
