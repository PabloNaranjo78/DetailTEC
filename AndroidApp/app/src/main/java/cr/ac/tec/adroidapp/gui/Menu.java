package cr.ac.tec.adroidapp.gui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import cr.ac.tec.adroidapp.Cliente;
import cr.ac.tec.adroidapp.R;

public class Menu extends AppCompatActivity {
    int userID;

    Button clienteButton;
    Button citasButton;
    Button puntosButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);

        Intent userIntent = getIntent();
        Bundle bundle = userIntent.getExtras();
        userID = (int) bundle.get("ID");

        clienteButton = findViewById(R.id.btn_Cliente);
        citasButton = findViewById(R.id.btn_Citas);
        puntosButton = findViewById(R.id.btn_Puntos);

        clienteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), GestionCliente.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });

        citasButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), Citas.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });

        puntosButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), Puntos.class);
                intent.putExtra("ID", userID);
                startActivity(intent);
            }
        });

    }
}