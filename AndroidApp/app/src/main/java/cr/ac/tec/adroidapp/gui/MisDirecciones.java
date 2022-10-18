package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.room.Room;

import android.content.Intent;
import android.os.Bundle;

import java.util.List;

import cr.ac.tec.adroidapp.ClienteDirecciones;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.R;

public class MisDirecciones extends AppCompatActivity {
    int userID;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mis_direcciones);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();
        List<ClienteDirecciones> direcciones = dataBase.daoProject().getClienteDireccionesById(userID);
    }
}