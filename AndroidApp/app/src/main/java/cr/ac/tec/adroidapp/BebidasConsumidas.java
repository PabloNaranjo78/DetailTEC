package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Factura.class, parentColumns = "NumFactura", childColumns = "Factura"),
        @ForeignKey(entity = Bebida.class, parentColumns = "NombreB", childColumns = "NombreB")},
        primaryKeys = {"Factura", "NombreB"})
public class BebidasConsumidas {
    public int Factura;
    public int Cantidad;
    public int NombreB;
}
