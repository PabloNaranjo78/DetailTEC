package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.app.DatePickerDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.Calendar;
import java.util.List;
import java.util.Vector;

import cr.ac.tec.adroidapp.Cita;
import cr.ac.tec.adroidapp.Cliente;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.Lavado;
import cr.ac.tec.adroidapp.MainActivity;
import cr.ac.tec.adroidapp.R;
import cr.ac.tec.adroidapp.Sucursal;

public class Citas extends AppCompatActivity {

    int userID;
    TextView infoClienteText;
    TextView nuevaPlaca;
    Spinner spSucursal;
    Spinner spTipo;
    Button cancelarCitaButton;
    Button solicitarCitaButton;
    Button fechaButton;
    DataBase dataBase;

    /**
     * Inicializa la parte grafica
     * @param savedInstanceState instancia
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_citas);

        String selectedSucursal = null;
        String selectedTipo = null;
        final String[] selectedDate = {null};

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        spSucursal = findViewById(R.id.sp_Sucursal);
        spTipo = findViewById(R.id.sp_Tipo);
        infoClienteText = findViewById(R.id.tv_infoCliente);
        cancelarCitaButton = findViewById(R.id.btn_cancelarCita);
        solicitarCitaButton = findViewById(R.id.btn_solicitar);
        fechaButton = findViewById(R.id.btn_fecha);
        nuevaPlaca = findViewById(R.id.pt_nuevaPlaca);

        dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, MainActivity.dbInstance()).allowMainThreadQueries().fallbackToDestructiveMigration().build();

        infoClienteText.setText(dataBase.daoProject().getClienteById(userID).Nombre);

        ArrayAdapter<String> adapterSucursal = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_dropdown_item, sucursales());
        spSucursal.setAdapter(adapterSucursal);

        ArrayAdapter<String> adapterLavado = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_dropdown_item, lavados());
        spTipo.setAdapter(adapterLavado);

        solicitarCitaButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (citaValidation(spSucursal.getSelectedItem().toString(),spTipo.getSelectedItem().toString()) && selectedDate[0]!=null){

                    Sucursal sucursal = dataBase.daoProject().getSucursalById(spSucursal.getSelectedItem().toString());
                    float nuevoTiempo = sucursal.TiempoDispo -  dataBase.daoProject().getLavadoyId(spTipo.getSelectedItem().toString()).Duracion;

                    dataBase.daoProject().insertCita(new Cita( nuevaPlaca.getText().toString(),
                            selectedDate[0], 0, spSucursal.getSelectedItem().toString(),
                            spTipo.getSelectedItem().toString(), userID));

                    dataBase.daoProject().updateSucursal(sucursal.NombreSuc, sucursal.FechaApert,
                            sucursal.Telefono, sucursal.Provincia, sucursal.Canton,
                            sucursal.Distrito, nuevoTiempo);

                    System.out.println(sucursal.TiempoDispo);
                }
                else{
                    AlertDialog alertMessage = new AlertDialog.Builder(Citas.this).create();
                    alertMessage.setTitle("Error");
                    alertMessage.setMessage("Solicitud incorrecta");
                    alertMessage.setButton(AlertDialog.BUTTON_POSITIVE, "OK",
                            new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {
                                    dialogInterface.dismiss();
                                }
                            });
                    alertMessage.show();
                }
            }
        });

        cancelarCitaButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), Menu.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });

        fechaButton.setOnClickListener(new View.OnClickListener() {
            final Calendar calendar = Calendar.getInstance();
            final int year = calendar.get(Calendar.YEAR);
            final int month = calendar.get(Calendar.MONTH);
            final int day = calendar.get(Calendar.DAY_OF_MONTH);

            @Override
            public void onClick(View view) {
                DatePickerDialog dialog = new DatePickerDialog(Citas.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker datePicker, int year, int month, int dayOfMonth) {
                        month++;
                        if (dateValidation(dayOfMonth, month, year)){
                            selectedDate[0] = dayOfMonth+"/"+month+"/"+year;
                            fechaButton.setText(selectedDate[0]);
                        }
                        else{
                            AlertDialog alertMessage = new AlertDialog.Builder(Citas.this).create();
                            alertMessage.setTitle("Error");
                            alertMessage.setMessage("Fecha Incorrecta");
                            alertMessage.setButton(AlertDialog.BUTTON_POSITIVE, "OK",
                                    new DialogInterface.OnClickListener() {
                                        @Override
                                        public void onClick(DialogInterface dialogInterface, int i) {
                                            dialogInterface.dismiss();
                                        }
                                    });
                            alertMessage.show();
                        }
                    }
                }, year, month, day);
                dialog.show();
            }
        });
    }

    /**
     * Muestra las sucursales disponibles
     * @return sucursales
     */
    private Vector<String> sucursales(){
        Vector<String> namesSucursales = new Vector<String>();
        List<Sucursal> sucursalList = dataBase.daoProject().getSucursal();

        for (int i = 0; i < sucursalList.size(); i++){
            namesSucursales.add(sucursalList.get(i).NombreSuc);
        }
        return namesSucursales;
    }

    /**
     * Muestra los tipos de lavados
     * @return tipos de lavados
     */
    private Vector<String> lavados(){
        Vector<String> namesLavados = new Vector<String>();
        List<Lavado> sucursalList = dataBase.daoProject().getLavado();

        for (int i = 0; i < sucursalList.size(); i++){
            namesLavados.add(sucursalList.get(i).NombreLav);
        }
        return namesLavados;
    }

    /**
     * Valida si se puede solicitar una cita o no
     * @param sucursal Sucursal a solicitar la cita
     * @param tipo Tipo de lavado solicitado
     * @return Vialidad de la cita
     */
    private boolean citaValidation(String sucursal, String tipo){
        if (!nuevaPlaca.getText().toString().trim().isEmpty() && !dataBase.daoProject().checkCita(nuevaPlaca.getText().toString())){
            return dataBase.daoProject().getSucursalById(sucursal).TiempoDispo > dataBase.daoProject().getLavadoyId(tipo).Duracion;
        }
        return false;
    }

    /**
     * Valida la fecha seleccionada
     * @param day Dia
     * @param month Mes
     * @param year Año
     * @return
     */
    private boolean dateValidation(int day, int month, int year){
        final Calendar calendar = Calendar.getInstance();
        final int yearAux = calendar.get(Calendar.YEAR);
        final int monthAux = calendar.get(Calendar.MONTH)+1;
        final int dayAux = calendar.get(Calendar.DAY_OF_MONTH);

        if (year>yearAux){
            return true;
        }
        else if(year==yearAux){
            if (month>monthAux){
                return true;
            }
            else if(month==monthAux){
                return day >= dayAux;
            }
        }
        return false;
    }
}