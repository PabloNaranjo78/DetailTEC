package cr.ac.tec.adroidapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class recycleAdapterDirecciones extends RecyclerView.Adapter<recycleAdapterDirecciones.MyViewHolder> {

    private List<ClienteDirecciones> clienteDirecciones;
    private DataBase dataBase;
    private int userID;

    /**
     * RecycleView adapter Direcciones
     * @param clienteDirecciones Direcciones de un cliente
     * @param dataBase Base de datos
     * @param userID ID usuario
     */
    public recycleAdapterDirecciones(List<ClienteDirecciones> clienteDirecciones, DataBase dataBase, int userID){
        this.clienteDirecciones = clienteDirecciones;
        this.dataBase = dataBase;
        this.userID = userID;
    }


    public class MyViewHolder extends RecyclerView.ViewHolder{
        private TextView infoDireccionesText;

        public MyViewHolder(final View view){
            super(view);
            infoDireccionesText = view.findViewById(R.id.tv_infoDireccionesItems);
            view.findViewById(R.id.btn_eliminarDirecciones).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    dataBase.daoProject().deleteClienteDirecciones(userID,
                            clienteDirecciones.get(getAdapterPosition()).Provincia,
                            clienteDirecciones.get(getAdapterPosition()).Canton,
                            clienteDirecciones.get(getAdapterPosition()).Distrito);
                    clienteDirecciones = dataBase.daoProject().getClienteDireccionesById(userID);
                    notifyItemRemoved(getAdapterPosition());

                }
            });
        }
    }

    @NonNull
    @Override
    public recycleAdapterDirecciones.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_itemsdirecciones, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull recycleAdapterDirecciones.MyViewHolder holder, int position) {
        String direccion = clienteDirecciones.get(position).Provincia +"\n" +clienteDirecciones.get(position).Canton +", "+ clienteDirecciones.get(position).Distrito;
        holder.infoDireccionesText.setText(direccion);
    }

    @Override
    public int getItemCount() {
        return clienteDirecciones.size();
    }
}
