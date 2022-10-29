package cr.ac.tec.adroidapp;

import org.json.JSONArray;
import org.json.JSONException;

public class AppUpdater {
    private DataBase dataBase;

    /**
     * Constructor
     * @param dataBase Data Base
     */
    public AppUpdater(DataBase dataBase) {
        this.dataBase = dataBase;
    }

    /**
     * Actualiza la tabla
     * @param arrayClientes Lista de clientes
     * @throws JSONException catch
     */
    public void updaterClientes(JSONArray arrayClientes) throws JSONException {
        for (int i = 0; i<arrayClientes.length(); i++){
            if (dataBase.daoProject().checkClinete(Integer.parseInt(arrayClientes.getJSONObject(i).get("idCliente").toString()))){
                dataBase.daoProject().updateCliente(Integer.parseInt(arrayClientes.getJSONObject(i).get("idCliente").toString()),
                        arrayClientes.getJSONObject(i).get("usuario").toString(),
                        arrayClientes.getJSONObject(i).get("contraseña").toString(),
                        arrayClientes.getJSONObject(i).get("infoContacto").toString(),
                        arrayClientes.getJSONObject(i).get("nombre").toString(),
                        arrayClientes.getJSONObject(i).get("email").toString(),
                        Integer.parseInt(arrayClientes.getJSONObject(i).get("puntosDispo").toString()),
                        Integer.parseInt(arrayClientes.getJSONObject(i).get("puntosRedm").toString()));
            }
            else{
                dataBase.daoProject().insertCliente(new Cliente(
                        Integer.parseInt(arrayClientes.getJSONObject(i).get("idCliente").toString()),
                        arrayClientes.getJSONObject(i).get("usuario").toString(),
                        arrayClientes.getJSONObject(i).get("contraseña").toString(),
                        arrayClientes.getJSONObject(i).get("infoContacto").toString(),
                        arrayClientes.getJSONObject(i).get("nombre").toString(),
                        arrayClientes.getJSONObject(i).get("email").toString(),
                        Integer.parseInt(arrayClientes.getJSONObject(i).get("puntosDispo").toString()),
                        Integer.parseInt(arrayClientes.getJSONObject(i).get("puntosRedm").toString())));
            }
        }
    }

    /**
     * Actualiza la tabla citas
     * @param arrayCitas Lista de citas
     * @throws JSONException catch
     */
    public void updaterCitas(JSONArray arrayCitas) throws JSONException {
        for (int i = 0; i<arrayCitas.length(); i++){
            if (dataBase.daoProject().checkCita(arrayCitas.getJSONObject(i).get("placa").toString())){
                dataBase.daoProject().updateCita(arrayCitas.getJSONObject(i).get("placa").toString(),
                        arrayCitas.getJSONObject(i).get("fechaCita").toString(),
                        Integer.parseInt(arrayCitas.getJSONObject(i).get("idEmpleado").toString()),
                        arrayCitas.getJSONObject(i).get("sucursal").toString(),
                        arrayCitas.getJSONObject(i).get("lavado").toString(),
                        Integer.parseInt(arrayCitas.getJSONObject(i).get("idCliente").toString()));
            }
            else{
                dataBase.daoProject().insertCita(new Cita(
                        arrayCitas.getJSONObject(i).get("placa").toString(),
                        arrayCitas.getJSONObject(i).get("fechaCita").toString(),
                        Integer.parseInt(arrayCitas.getJSONObject(i).get("idEmpleado").toString()),
                        arrayCitas.getJSONObject(i).get("sucursal").toString(),
                        arrayCitas.getJSONObject(i).get("lavado").toString(),
                        Integer.parseInt(arrayCitas.getJSONObject(i).get("idCliente").toString())));
            }
        }
    }

    /**
     * Actualiza la tabla direcciones
     * @param arrayDirecciones lista de direcciones
     * @throws JSONException catch
     */
    public void updaterDirecciones(JSONArray arrayDirecciones) throws JSONException {
        for (int i = 0; i<arrayDirecciones.length(); i++){
            if (!dataBase.daoProject().checkDireccion(
                    Integer.parseInt(arrayDirecciones.getJSONObject(i).get("idCliente").toString()),
                    arrayDirecciones.getJSONObject(i).get("provincia").toString(),
                    arrayDirecciones.getJSONObject(i).get("canton").toString(),
                    arrayDirecciones.getJSONObject(i).get("distrito").toString())){
                dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(
                        Integer.parseInt(arrayDirecciones.getJSONObject(i).get("idCliente").toString()),
                        arrayDirecciones.getJSONObject(i).get("provincia").toString(),
                        arrayDirecciones.getJSONObject(i).get("canton").toString(),
                        arrayDirecciones.getJSONObject(i).get("distrito").toString()
                ));
            }
        }
    }

    /**
     * Actualiza la tabla telefonos
     * @param arrayTelefonos lista de telefonos
     * @throws JSONException catch
     */
    public void updaterTelefonos(JSONArray arrayTelefonos) throws JSONException {
        for (int i = 0; i<arrayTelefonos.length(); i++){
            if (!dataBase.daoProject().checkTelefono(
                    Integer.parseInt(arrayTelefonos.getJSONObject(i).get("idCliente").toString()),
                    Integer.parseInt(arrayTelefonos.getJSONObject(i).get("telefono").toString()))){
                dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(
                        Integer.parseInt(arrayTelefonos.getJSONObject(i).get("idCliente").toString()),
                        Integer.parseInt(arrayTelefonos.getJSONObject(i).get("telefono").toString())
                ));
            }
        }
    }

    /**
     * Actualiza la tabla factura
     * @param arrayFacturas lista de facturas
     * @throws JSONException catch
     */
    public void updaterFactura(JSONArray arrayFacturas) throws JSONException {
        for (int i = 0; i<arrayFacturas.length(); i++){
            if (!dataBase.daoProject().checkFactura(
                    Integer.parseInt(arrayFacturas.getJSONObject(i).get("numFactura").toString()))){
                dataBase.daoProject().insertFactura(new Factura(
                        arrayFacturas.getJSONObject(i).get("placa").toString(),
                        Integer.parseInt(arrayFacturas.getJSONObject(i).get("numFactura").toString()),
                        Integer.parseInt(arrayFacturas.getJSONObject(i).get("monto").toString())
                ));
            }
        }
    }

    /**
     * Actualiza la tabla lavado
     * @param arrayLavados lista de lavados
     * @throws JSONException catch
     */
    public void updaterLavados(JSONArray arrayLavados) throws JSONException {
        for (int i = 0; i<arrayLavados.length(); i++){
            if (dataBase.daoProject().checkLavado(
                    arrayLavados.getJSONObject(i).get("nombreLav").toString())){
                dataBase.daoProject().updateLavado(
                        arrayLavados.getJSONObject(i).get("nombreLav").toString(),
                        Float.parseFloat(arrayLavados.getJSONObject(i).get("duracion").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("precio").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("costo").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("puntos").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("puntos").toString()
                ));
            }
            else{
                dataBase.daoProject().insertLavado(new Lavado(
                        arrayLavados.getJSONObject(i).get("nombreLav").toString(),
                        Float.parseFloat(arrayLavados.getJSONObject(i).get("duracion").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("precio").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("costo").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("puntos").toString()),
                        Integer.parseInt(arrayLavados.getJSONObject(i).get("puntos").toString()
                )));

            }
        }

    }

    /**
     * Actualiza la tabla sucursal
     * @param arraySucursales Lista de sucursales
     * @throws JSONException catch
     */
    public void updaterSucursales(JSONArray arraySucursales) throws JSONException {
        for (int i = 0; i<arraySucursales.length(); i++){
            if (dataBase.daoProject().checkSucursal(
                    arraySucursales.getJSONObject(i).get("nombreSuc").toString())){
                dataBase.daoProject().updateSucursal(
                        arraySucursales.getJSONObject(i).get("nombreSuc").toString(),
                        arraySucursales.getJSONObject(i).get("fechaApert").toString(),
                        Integer.parseInt(arraySucursales.getJSONObject(i).get("telefono").toString()),
                        arraySucursales.getJSONObject(i).get("provincia").toString(),
                        arraySucursales.getJSONObject(i).get("canton").toString(),
                        arraySucursales.getJSONObject(i).get("distrito").toString(),
                        Float.parseFloat(arraySucursales.getJSONObject(i).get("tiempoDispo").toString())
                );
            }
            else{
                dataBase.daoProject().insertSucursal(new Sucursal(
                        arraySucursales.getJSONObject(i).get("nombreSuc").toString(),
                        arraySucursales.getJSONObject(i).get("fechaApert").toString(),
                        Integer.parseInt(arraySucursales.getJSONObject(i).get("telefono").toString()),
                        arraySucursales.getJSONObject(i).get("provincia").toString(),
                        arraySucursales.getJSONObject(i).get("canton").toString(),
                        arraySucursales.getJSONObject(i).get("distrito").toString(),
                        Float.parseFloat(arraySucursales.getJSONObject(i).get("tiempoDispo").toString())
                ));

            }
        }

    }

    public void fullupdater(){

    }



}


//    public void updaterCitas(JSONArray arrayCitas){
//        for (int i = 0; i<arrayCitas.length(); i++){
//            if (dataBase.daoProject()){
//
//            }
//            else{
//
//            }
//        }
//
//    }
