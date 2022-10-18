package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.room.Room;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import java.util.List;

import cr.ac.tec.adroidapp.ClienteTelefonos;
import cr.ac.tec.adroidapp.DataBase;
import cr.ac.tec.adroidapp.R;
import cr.ac.tec.adroidapp.recycleAdapter;

public class MIsTelefonos extends AppCompatActivity {
    int userID;
    List<ClienteTelefonos> telefonos;
    RecyclerView recyclerView;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mis_telefonos);

        recyclerView = findViewById(R.id.recycleView);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        DataBase dataBase = Room.databaseBuilder(getApplicationContext(), DataBase.class, "prueba1").allowMainThreadQueries().build();
        telefonos = dataBase.daoProject().getClienteTelefonosById(userID);

        setAdapter();
    }

    public void setAdapter(){
        recycleAdapter adapter = new recycleAdapter(telefonos);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(adapter);
    }
}