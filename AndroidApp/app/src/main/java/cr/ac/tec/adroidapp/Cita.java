package cr.ac.tec.adroidapp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.ForeignKey;
import androidx.room.PrimaryKey;

@Entity(foreignKeys = {@ForeignKey(entity = Sucursal.class, parentColumns = "NombreSuc", childColumns = "Sucursal"),
                        @ForeignKey(entity = Lavado.class, parentColumns = "NombreLav", childColumns = "Lavado"),
                        @ForeignKey(entity = Cliente.class, parentColumns = "IDCliente", childColumns = "IDCliente")})
public class Cita {
    @PrimaryKey
    @NonNull
    public String Placa;
    public String FechaCita;
    public int IDEmpleado;
    public String Sucursal;
    public String Lavado;
    public int IDCliente;

    /**
     * Representa la tabla de una cita
     * @param placa placa de la cita
     * @param fechaCita fecha de la cita
     * @param IDEmpleado ID del empleado
     * @param sucursal sucursal de la cita
     * @param lavado tipo de lavado
     * @param IDCliente ID del cliente
     */
    public Cita(@NonNull String placa, String fechaCita, int IDEmpleado, String sucursal, String lavado, int IDCliente) {
        this.Placa = placa;
        this.FechaCita = fechaCita;
        this.IDEmpleado = IDEmpleado;
        this.Sucursal = sucursal;
        this.Lavado = lavado;
        this.IDCliente = IDCliente;
    }

    /**
     * Constructor
     */
    public Cita() {
    }
}
