package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.room.Room;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.List;

import cr.ac.tec.adroidapp.ClienteDirecciones;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.MainActivity;
import cr.ac.tec.adroidapp.R;
import cr.ac.tec.adroidapp.recycleAdapterDirecciones;

public class MisDirecciones extends AppCompatActivity {
    int userID;
    List<ClienteDirecciones> direcciones;
    DataBase dataBase;
    RecyclerView recyclerView;
    Button guardarDireccionButton;
    Button cancelarDireccionButton;
    TextView nuevaProvinciaText;
    TextView nuevoCantonText;
    TextView nuevoDistritoText;
    String provincia;
    String canton;
    String distrito;


    /**
     * Inicializa la parte grafica
     * @param savedInstanceState Instancia
     */
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mis_direcciones);

        recyclerView = findViewById(R.id.recycleViewDirecciones);
        guardarDireccionButton = findViewById(R.id.btn_guardarDireccion);
        cancelarDireccionButton = findViewById(R.id.btn_cancelarDireccion);
        nuevaProvinciaText = findViewById(R.id.pt_nuevaProvincia);
        nuevoCantonText = findViewById(R.id.pt_nuevoCanton);
        nuevoDistritoText = findViewById(R.id.pt_nuevoDistrito);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, MainActivity.dbInstance()).allowMainThreadQueries().fallbackToDestructiveMigration().build();
        direcciones = dataBase.daoProject().getClienteDireccionesById(userID);

        guardarDireccionButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                provincia = nuevaProvinciaText.getText().toString();
                canton = nuevoCantonText.getText().toString();
                distrito = nuevoDistritoText.getText().toString();
                if(directionValidation(provincia,canton,distrito) ){
                    dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(userID,provincia,canton,distrito));
                    direcciones = dataBase.daoProject().getClienteDireccionesById(userID);
                    nuevaProvinciaText.setText(null);
                    nuevoCantonText.setText(null);
                    nuevoDistritoText.setText(null);
                    setAdapter(dataBase, userID);
                }
                else{
                    AlertDialog alertMessage = new AlertDialog.Builder(MisDirecciones.this).create();
                    alertMessage.setTitle("Error");
                    alertMessage.setMessage("Dirección incorrecta");
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

        cancelarDireccionButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), GestionCliente.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });

        setAdapter(dataBase, userID);
    }

    /**
     * Asocia un adaptdor a el RecycleView
     * @param dataBase Base de Datos
     * @param userID ID usuario
     */
    public void setAdapter(DataBase dataBase, int userID){
        recycleAdapterDirecciones adapter = new recycleAdapterDirecciones(direcciones,dataBase,userID);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(adapter);
    }

    /**
     * Valida la integridad de una direccio
     * @param provincia Provincia
     * @param canton Canton
     * @param distrito Distrito
     * @return Integridad de la informacion
     */
    private boolean directionValidation(String provincia, String canton, String distrito){
        return (provincia != null && !provincia.trim().isEmpty()) &&
                (canton != null && !canton.trim().isEmpty()) &&
                (distrito != null && !distrito.trim().isEmpty())&&
                !dataBase.daoProject().checkDireccion(userID, provincia, canton, distrito);
    }
}