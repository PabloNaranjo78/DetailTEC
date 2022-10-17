package cr.ac.tec.adroidapp;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;

import java.util.List;

@Dao
public interface DaoProject {

    //Bebida
    @Insert
    void insertBebida(Bebida...bebidas);

    @Query("SELECT * FROM Bebida")
    List<Bebida> getBedida();

    @Query("SELECT * FROM Bebida WHERE NombreB= :nombreB")
    Bebida getBebidaById(String nombreB);

    @Query("UPDATE Bebida SET NombreB= :nombreB, Cantidad= :cantidad, Costo= :costo WHERE NombreB= :nombreB")
    void updateBebida(String nombreB, int cantidad, int costo);

    @Query("DELETE FROM Bebida WHERE NombreB= :nombreB")
    void deleteBebida(String nombreB);


    // BebidasConsumidas
    @Insert
    void insertBebidasConsumidas(BebidasConsumidas...bebidasConsumidas);

    @Query("SELECT * FROM BebidasConsumidas")
    List<BebidasConsumidas> getBedidasConsumidas();

    @Query("SELECT * FROM BebidasConsumidas WHERE Factura= :factura ")
    List<BebidasConsumidas> getBebidasConsumidasById(int factura);

    @Query("UPDATE BebidasConsumidas SET Factura= :factura, Cantidad= :cantidad, NombreB= :nombreB WHERE Factura= :factura and NombreB= :nombreB")
    void updateBebidasConsumidas(int factura, int cantidad, String nombreB);

    @Query("DELETE FROM BebidasConsumidas WHERE Factura= :factura and NombreB= :nombreB")
    void deleteBebidasConsumidas(int factura, String nombreB);


    // Cita
    @Insert
    void insertCita(Cita...citas);

    @Query("SELECT * FROM Cita")
    List<Cita> getCita();

    @Query("SELECT * FROM Cita WHERE Placa= :placa")
    Cita getCitaById(int placa);

    @Query("UPDATE Cita SET Placa= :placa, FechaCita= :fecha, IDEmpleado= :idempleado, Sucursal= :sucursal, Lavado= :lavado, IDCliente= :idcliente WHERE Placa= :placa")
    void updateCita(int placa, String fecha, int idempleado, String sucursal, String lavado, int idcliente);

    @Query("DELETE FROM Cita WHERE Placa= :placa")
    void deleteCita(int placa);


    //Cliente//
    @Insert
    void insertCliente(Cliente...clientes);

    @Query("SELECT * FROM Cliente")
    List<Cliente> getClientes();

    @Query("SELECT * FROM Cliente WHERE IDCliente= :idcliente and Usuario= :usuario")
    Cliente getClienteById(int idcliente, String usuario);

    @Query("UPDATE Cliente SET IDCliente= :idcliente, Usuario= :usuario, Contraseña= :contraseña," +
            " InfoContacto= :infocontacto, Nombre= :nombre, Email= :email, PuntosDispo= :puntosdispo" +
            " WHERE IDCliente= :idcliente and Usuario= :usuario")
    void updateCliente(int idcliente, String usuario, String contraseña, String infocontacto,
                       String nombre, String email, int puntosdispo);

    @Query("DELETE FROM Cliente WHERE IDCliente= :idcliente" )
    void deleteCliente(int idcliente);


    // Cliente Direcciones
    @Insert
    void insertClienteDirecciones(ClienteDirecciones...clienteDirecciones);

    @Query("SELECT * FROM ClienteDirecciones")
    List<ClienteDirecciones> getClienteDirecciones();

    @Query("SELECT * FROM ClienteDirecciones WHERE IDCliente= :idcliente")
    List<ClienteDirecciones> getClienteDireccionesById(int idcliente);

    @Query("UPDATE ClienteDirecciones SET IDCliente= :idcliente, Provincia= :provincia, Canton= :canton, Distrito= :distrito WHERE IDCliente= :idcliente and Provincia= :provincia and Canton= :canton")
    //Is not working good
    void updateClienteDirecciones(int idcliente, String provincia, String canton, String distrito);

    @Query("DELETE FROM ClienteDirecciones WHERE IDCliente= :idcliente and Provincia= :provincia and Canton= :canton and Distrito= :distrito ")
    void deleteClienteDirecciones(int idcliente, String provincia, String canton, String distrito);


    //Cliente Telefono
    @Insert
    void insertClienteTelefonos(ClienteTelefonos...clienteTelefonos);

    @Query("SELECT * FROM ClienteTelefonos")
    List<ClienteTelefonos> getClienteTelefonos();

    @Query("SELECT * FROM ClienteTelefonos WHERE IDCliente= :idcliente")
    List<ClienteTelefonos> getClienteTelefonosById(int idcliente);

    @Query("UPDATE ClienteTelefonos SET IDCliente= :idcliente, Telefono= :telefono WHERE IDCliente= :idcliente")
    //Is not working good
    void updateClienteTelefonos(int idcliente, int telefono);

    @Query("DELETE FROM ClienteTelefonos WHERE IDCliente= :idcliente and Telefono= :telefono")
    void deleteClienteTelefonos(int idcliente, int telefono);


    //Factura
    @Insert
    void insertFactura(Factura...facturas);

    @Query("SELECT * FROM Factura")
    List<Factura> getFactura();

    @Query("SELECT * FROM Factura WHERE NumFactura= :numfactura")
    Factura getFacturaById(int numfactura);

    @Query("UPDATE Factura SET Placa= :placa, NumFactura= :numfactura, Monto= :monto WHERE NumFactura= :numfactura")
        //ASK OF WHAT IS NEEDED IS RECEIPT OR A SET OF THEM
    void updateFactura(int placa, int numfactura, int monto);

    @Query("DELETE FROM Factura WHERE NumFactura= :numfactura")
    void deleteClienteTelefonos(int numfactura);

    //Lavado
    @Insert
    void insertLavado(Lavado...lavados);

    @Query("SELECT * FROM Lavado")
    List<Lavado> getLavado();

    @Query("SELECT * FROM Lavado WHERE NombreLav= :nombrelav")
    Lavado getLavadoyId(int nombrelav);

    @Query("UPDATE Lavado SET NombreLav= :nombrelav, Duracion= :duracion, Precio= :precio, Costo= :costo, Puntos= :puntos WHERE NombreLav= :nombrelav")
    void updateLavado(String nombrelav, float duracion, int precio, int costo, int puntos);

    @Query("DELETE FROM Lavado WHERE NombreLav= :nombrelav")
    void deleteLavado(String nombrelav);


    // SnaksConsumidos
    @Insert
    void insertSnaksConsumidos(SnacksConsumidos...snacksConsumidos);

    @Query("SELECT * FROM SnacksConsumidos")
    List<SnacksConsumidos> getSnacksConsumidos();

    @Query("SELECT * FROM SnacksConsumidos WHERE Factura= :factura ")
    List<SnacksConsumidos> getSnacksConsumidosById(int factura);

    @Query("UPDATE SnacksConsumidos SET Factura= :factura, Cantidad= :cantidad, NombreS= :nombreS WHERE Factura= :factura and NombreS= :nombreS")
    void updateSnacksConsumidos(int factura, int cantidad, String nombreS);

    @Query("DELETE FROM SnacksConsumidos WHERE Factura= :factura and NombreS= :nombreS")
    void deleteSnacksConsumidos(int factura, String nombreS);


    //Snak
    @Insert
    void insertSnak(Snak...snaks);

    @Query("SELECT * FROM Snak")
    List<Snak> getSnak();

    @Query("SELECT * FROM Snak WHERE NombreS= :nombreS")
    Snak getSnakById(String nombreS);

    @Query("UPDATE Snak SET NombreS= :nombreS, Cantidad= :cantidad, Costo= :costo WHERE NombreS= :nombreS")
    void updateSnak(String nombreS, int cantidad, int costo);

    @Query("DELETE FROM Snak WHERE NombreS= :nombreS")
    void deleteSnak(String nombreS);

}
