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
    public int Placa;
    public String FechaCita;
    public int IDEmpleado;
    public String Sucursal;
    public String Lavado;
    public int IDCliente;

    public Cita(@NonNull int placa, String fechaCita, int IDEmpleado, String sucursal, String lavado, int IDCliente) {
        this.Placa = placa;
        this.FechaCita = fechaCita;
        this.IDEmpleado = IDEmpleado;
        this.Sucursal = sucursal;
        this.Lavado = lavado;
        this.IDCliente = IDCliente;
    }

    public Cita() {
    }
}
