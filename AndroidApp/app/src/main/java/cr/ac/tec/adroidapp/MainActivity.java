package cr.ac.tec.adroidapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.os.Bundle;

import java.io.Console;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        DataBase auxdb = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();
        //auxdb.daoProject().insertCliente(new Cliente(123, "Monge", "fff", "SepaDios", "Fernando", "monge@123", 5));
        //auxdb.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 50025063) );
//        auxdb.daoProject().insertClienteTelefonos(new ClienteTelefonos(123, 89215510) );

        List<ClienteTelefonos> listaux = auxdb.daoProject().getClienteTelefonos();
        String texux = "";

        for (int i =0; i < listaux.size(); i++){
            texux = texux + "ID: " + listaux.get(i).IDCliente + " Telefono: " + listaux.get(i).Telefono + "\n";

        }

        System.out.println("AAAAAAAAAAA");
        System.out.println(texux);

    }



}