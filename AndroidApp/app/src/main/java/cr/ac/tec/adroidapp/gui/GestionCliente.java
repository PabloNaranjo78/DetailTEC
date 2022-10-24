package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import cr.ac.tec.adroidapp.Cliente;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.MainActivity;
import cr.ac.tec.adroidapp.R;

public class GestionCliente extends AppCompatActivity {

    int userID;
    Button guardarButton;
    Button cancelarButton;
    Button misDireccionesButton;
    Button misTelefonosButton;
    TextView infoUsuarioText;
    TextView nuevaPassText;
    TextView infoNombreText;
    TextView nuevaInfoText;
    TextView nuevoEmailText;
    TextView infoPuntosText;
    public static MIsTelefonos mIsTelefonos = new MIsTelefonos();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gestion_cliente);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, MainActivity.dbInstance()).allowMainThreadQueries().fallbackToDestructiveMigration().build();
        Cliente cliente = dataBase.daoProject().getClienteById(userID);

        guardarButton = findViewById(R.id.btn_Guardar);
        cancelarButton = findViewById(R.id.btn_CancelarCliente);
        misDireccionesButton = findViewById(R.id.btn_MisDirecciones);
        misTelefonosButton = findViewById(R.id.btn_MisTelefonos);

        infoUsuarioText = findViewById(R.id.tv_infUsuario);
        nuevaPassText = findViewById(R.id.pt_nuevapass);
        infoNombreText = findViewById(R.id.tv_infNombre);
        nuevaInfoText = findViewById(R.id.pt_nuevainfo);
        nuevoEmailText = findViewById(R.id.pt_nuevoEmail);
        infoPuntosText = findViewById(R.id.tv_infoPuntos);

        infoUsuarioText.setText(cliente.Usuario);
        infoNombreText.setText(cliente.Nombre);
        infoPuntosText.setText(String.valueOf(cliente.PuntosDispo));



        guardarButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (paramValidation(nuevaPassText.getText().toString(),nuevaInfoText.getText().toString(),nuevoEmailText.getText().toString())){
                    dataBase.daoProject().updateCliente(userID, cliente.Usuario,
                            nuevaPassText.getText().toString(),nuevaInfoText.getText().toString(),
                            cliente.Nombre, nuevoEmailText.getText().toString(), cliente.PuntosDispo);
                    System.out.println("Radio Check well done dude");
                }
                else {
                    AlertDialog alertMessage = new AlertDialog.Builder(GestionCliente.this).create();
                    alertMessage.setTitle("Error");
                    alertMessage.setMessage("Cambios invalidos");
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

        cancelarButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), Menu.class);
                intent.putExtra("ID", userID);
                startActivity(intent);

            }
        });

        misDireccionesButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), MisDirecciones.class);
                intent.putExtra("ID", userID);
                startActivity(intent);

            }
        });

        misTelefonosButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), MIsTelefonos.class);
                intent.putExtra("ID", userID);
                startActivity(intent);



            }
        });
    }

    public boolean paramValidation(String pass, String info, String email){
        if ((pass != null && !pass.isEmpty())&&(info != null && !info.isEmpty())&&(email != null && !email.isEmpty())){
            return true;
        }
        return false;
    }


}