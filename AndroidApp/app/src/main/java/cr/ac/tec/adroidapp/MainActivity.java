package cr.ac.tec.adroidapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.List;
import java.util.Objects;

import cr.ac.tec.adroidapp.gui.Menu;

public class MainActivity extends AppCompatActivity {
    int userID;

    TextView userText;
    TextView passwordText;
    Button loginButton;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        userText = findViewById(R.id.pt_Usuario);
        passwordText = findViewById(R.id.pt_Contraseña);
        loginButton = findViewById(R.id.btn_Login);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (userValidation(userText.getText().toString(), passwordText.getText().toString())){
                    Intent intent = new Intent(getApplicationContext(), Menu.class);
                    intent.putExtra("ID", userID);
                    startActivity(intent);
                }
                else{
                    AlertDialog alertMessage = new AlertDialog.Builder(MainActivity.this).create();
                    alertMessage.setTitle("Error");
                    alertMessage.setMessage("Credenciales incorrectas");
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

        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();

//        dataBase.daoProject().insertCliente(new Cliente(123, "Monge", "f", "SepaDios", "Fernando", "monge@123", 5));
        //auxdb.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 50025063) );

//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 89215510));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 74856932));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 65241238));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 12345678));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 96850312));


    }

    public boolean userValidation(String user, String pass){
        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();
        List<Cliente> clientList = dataBase.daoProject().getClientes();
            for (int i = 0; i < clientList.size(); i++){
                if (Objects.equals(clientList.get(i).Usuario, user) & Objects.equals(clientList.get(i).Contraseña, pass)){
                    userID = clientList.get(i).IDCliente;
                    return true;
                }
            }
            return false;
    }
}