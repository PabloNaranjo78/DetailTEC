package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Factura.class, parentColumns = "NumFactura", childColumns = "Factura"),
                        @ForeignKey(entity = Snak.class, parentColumns = "NombreS", childColumns = "NombreS")},
        primaryKeys = {"Factura", "NombreS"})
public class SnacksConsumidos {
    public int Factura;
    public int Cantidad;
    public int NombreS;

    public SnacksConsumidos(int factura, int cantidad, int nombreS) {
        this.Factura = factura;
        this.Cantidad = cantidad;
        this.NombreS = nombreS;
    }
}
