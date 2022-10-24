package cr.ac.tec.adroidapp;

import androidx.room.AutoMigration;
import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(
        version = 2,
        entities = {Bebida.class, BebidasConsumidas.class, Cita.class,Cliente.class,
                    ClienteDirecciones.class, ClienteTelefonos.class, Factura.class,
                    Lavado.class, SnacksConsumidos.class, Snak.class, Sucursal.class}

)

public abstract class DataBase extends RoomDatabase {
    public abstract DaoProject daoProject();
}

