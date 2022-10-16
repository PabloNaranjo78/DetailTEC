package cr.ac.tec.adroidapp;

import androidx.room.Entity;
import androidx.room.ForeignKey;
import androidx.room.PrimaryKey;

@Entity(foreignKeys = {@ForeignKey(entity = Sucursal.class, parentColumns = "NombreSuc", childColumns = "Sucursal"),
                        @ForeignKey(entity = Lavado.class, parentColumns = "NombreLav", childColumns = "Lavado"),
                        @ForeignKey(entity = Cliente.class, parentColumns = "IDcliente", childColumns = "IDCliente")})
public class Cita {
    @PrimaryKey
    public int Placa;
    public String FechaCita;
    public int IDEmpleado;
    public String Sucursal;
    public String Lavado;
    public int IDCliente;
}
