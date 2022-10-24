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

import cr.ac.tec.adroidapp.ClienteTelefonos;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.MainActivity;
import cr.ac.tec.adroidapp.R;
import cr.ac.tec.adroidapp.recycleAdapterTelefonos;

public class MIsTelefonos extends AppCompatActivity {
    int userID;
    List<ClienteTelefonos> telefonos;
    RecyclerView recyclerView;
    Button guardarTelefono;
    Button cancelarTelefono;
    TextView nuevoTelefonoText;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mis_telefonos);

        recyclerView = findViewById(R.id.recycleViewTelefonos);
        guardarTelefono = findViewById(R.id.btn_guardarTelefono);
        cancelarTelefono = findViewById(R.id.btn_cancelarTelefono);
        nuevoTelefonoText = findViewById(R.id.pt_nuevoTelefono);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, MainActivity.dbInstance()).allowMainThreadQueries().fallbackToDestructiveMigration().build();
        telefonos = dataBase.daoProject().getClienteTelefonosById(userID);

        guardarTelefono.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    int number = Integer.parseInt(nuevoTelefonoText.getText().toString());
                    if (!dataBase.daoProject().checkTelefono(userID,number)){
                        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(userID, number));
                        telefonos = dataBase.daoProject().getClienteTelefonosById(userID);
                        nuevoTelefonoText.setText(null);
                        setAdapter(dataBase, userID);
                    }
                    else{
                        phoneDecline();
                    }
                }
                catch (NumberFormatException e){
                    phoneDecline();
                }
            }
        });

        cancelarTelefono.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), GestionCliente.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });



        setAdapter(dataBase, userID);
    }

    private void phoneDecline(){
        AlertDialog alertMessage = new AlertDialog.Builder(MIsTelefonos.this).create();
        alertMessage.setTitle("Error");
        alertMessage.setMessage("Número incorrecto");
        alertMessage.setButton(AlertDialog.BUTTON_POSITIVE, "OK",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                    }
                });
        alertMessage.show();

    }

    public void setAdapter(DataBase dataBase, int userID){

        recycleAdapterTelefonos adapter = new recycleAdapterTelefonos(telefonos,dataBase,userID);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(adapter);

    }

}