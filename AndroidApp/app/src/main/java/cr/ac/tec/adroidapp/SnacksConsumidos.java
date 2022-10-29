package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;

@Entity(foreignKeys = {@ForeignKey(entity = Factura.class, parentColumns = "NumFactura", childColumns = "Factura"),
                        @ForeignKey(entity = Snak.class, parentColumns = "NombreS", childColumns = "NombreS")},
        primaryKeys = {"Factura", "NombreS"})
public class SnacksConsumidos {
    @NonNull
    public int Factura;
    public int Cantidad;
    @NonNull
    public int NombreS;

    /**
     * Representa la tabla de los snaks consumidos
     * @param factura Factura snak
     * @param cantidad Cantidad snaks
     * @param nombreS Nombre snak
     */
    public SnacksConsumidos(@NonNull int factura, int cantidad, @NonNull int nombreS) {
        this.Factura = factura;
        this.Cantidad = cantidad;
        this.NombreS = nombreS;
    }

    /**
     * Constructor
     */
    public SnacksConsumidos() {
    }
}