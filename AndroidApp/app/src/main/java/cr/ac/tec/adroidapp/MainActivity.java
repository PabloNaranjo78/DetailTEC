package cr.ac.tec.adroidapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

import cr.ac.tec.adroidapp.gui.Menu;

public class MainActivity extends AppCompatActivity {
    int userID;
    DataBase dataBase;
    TextView userText;
    TextView passwordText;
    Button loginButton;
    AppUpdater updater;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        userText = findViewById(R.id.pt_Usuario);
        passwordText = findViewById(R.id.pt_Contraseña);
        loginButton = findViewById(R.id.btn_Login);

        dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, dbInstance()).allowMainThreadQueries().fallbackToDestructiveMigration().build();
        updater = new AppUpdater(dataBase);

        apiTester();

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
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
                } catch (NoSuchAlgorithmException e) {
                    e.printStackTrace();
                }
            }
        });

//        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();



//        dataBase.daoProject().insertSucursal(new Sucursal("Suc 1", "Enero", 77, "Cartago", "Central", "Oriental", 1.5F));
//        dataBase.daoProject().insertSucursal(new Sucursal("Suc 2", "Diciembre", 88, "Cartago", "El Guarco", "Tobosi", 5.0F));
//        dataBase.daoProject().insertSucursal(new Sucursal("Suc 3", "Mayo", 66, "Guanacaste", "Liberia", "Nicoya", 11.7F));
//
//
//        dataBase.daoProject().insertCliente(new Cliente(123, "Monge", "f", "SepaDios", "Fernando", "monge@123", 5));
//
//
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 89215510));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 74856932));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 65241238));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 12345678));
//        dataBase.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 96850312));
//
//        dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(123, "Alajuela", "San Carlos", "Pital"));
//        dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(123, "Alajuela", "Central", "Pital"));
//        dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(123, "Heredia", "San Carlos", "Pital"));
//        dataBase.daoProject().insertClienteDirecciones(new ClienteDirecciones(123, "Guanacaste", "Liberia", "Santa Cruz"));

//        dataBase.daoProject().insertLavado(new Lavado("Barato", 0.3F, 1500, 1200,25));
//        dataBase.daoProject().insertLavado(new Lavado("Caro", 0.7F, 2000, 1700,35));
//        dataBase.daoProject().insertLavado(new Lavado("Best", 1.0F, 2800, 2300,50));


    }

    public boolean userValidation(String user, String pass) throws NoSuchAlgorithmException {
        List<Cliente> clientList = dataBase.daoProject().getClientes();

            for (int i = 0; i < clientList.size(); i++){
                System.out.println(clientList.get(i).Usuario);
                System.out.println(clientList.get(i).Contraseña);
                if (Objects.equals(clientList.get(i).Usuario, user) & Objects.equals(clientList.get(i).Contraseña, pass)){
                    userID = clientList.get(i).IDCliente;
                    return true;
                }
            }
            return false;
    }

    public static String dbInstance(){
        return "Test2";
    }

    public void apiTester(){
        System.out.println("CHECK 1");
        String url = "http://25.55.195.113:4500/api/Cliente";

        StringRequest getRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONArray array = new JSONArray(response);
                    System.out.println("IT'S WORKING");

                    updater.updaterClientes(array);


                } catch (JSONException e) {
                    System.out.println("CHECK 2");
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("error", error.getMessage());

            }
        });
        Volley.newRequestQueue(this).add(getRequest);

    }
}
