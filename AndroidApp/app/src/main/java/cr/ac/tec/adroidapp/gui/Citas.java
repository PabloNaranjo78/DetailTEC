package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.List;
import java.util.Vector;

import cr.ac.tec.adroidapp.Cliente;
import cr.ac.tec.adroidapp.DataBase;
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
    DataBase dataBase;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_citas);

        String selection = null;

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        spSucursal = (Spinner) findViewById(R.id.sp_Sucursal);
        spTipo = (Spinner) findViewById(R.id.sp_Tipo);
        infoClienteText = findViewById(R.id.tv_infoCliente);
        cancelarCitaButton = findViewById(R.id.btn_cancelarCita);
        solicitarCitaButton = findViewById(R.id.btn_solicitar);

        dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();

        infoClienteText.setText(dataBase.daoProject().getClienteById(userID).Nombre);

        ArrayAdapter<String> adapterSucursal = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_dropdown_item, sucursales());
        spSucursal.setAdapter(adapterSucursal);

//        solicitarCitaButton.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//
//            }
//        });
//
//        cancelarCitaButton.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                Intent intent = new Intent(getApplicationContext(), Citas.class);
//                intent.putExtra("ID", userID);
//                startActivity(intent);
//            }
//        });

    }

    private Vector<String> sucursales(){
        Vector<String> namesSucursales = new Vector<String>();
        List<Sucursal> sucursalList = dataBase.daoProject().getSucursal();

        for (int i = 0; i < sucursalList.size(); i++){
            namesSucursales.add(sucursalList.get(i).NombreSuc);
        }
        return namesSucursales;
    }
}