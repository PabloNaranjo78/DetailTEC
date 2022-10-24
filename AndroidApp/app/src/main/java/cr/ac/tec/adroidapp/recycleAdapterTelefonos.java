package cr.ac.tec.adroidapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class recycleAdapterTelefonos extends RecyclerView.Adapter<recycleAdapterTelefonos.MyViewHolder> {

     private List<ClienteTelefonos> clienteTelefonos;
     private DataBase dataBase;
     private int userID;

    /**
     * RecycleView adapter telefonos
     * @param clienteTelefonos Telefonos cliente
     * @param dataBase Base de datos
     * @param userID ID usuario
     */
     public recycleAdapterTelefonos(List<ClienteTelefonos> clienteTelefonos, DataBase dataBase, int userID){
         this.clienteTelefonos = clienteTelefonos;
         this.dataBase = dataBase;
         this.userID = userID;
     }

     public class MyViewHolder extends RecyclerView.ViewHolder{
         private TextView infoTelefonosItemsTxt;

         public MyViewHolder(final View view){
             super(view);
             infoTelefonosItemsTxt = view.findViewById(R.id.tv_infoTelefonoItems);
             view.findViewById(R.id.btn_eliminarTelefonos).setOnClickListener(new View.OnClickListener() {
                 @Override
                 public void onClick(View view) {
                     dataBase.daoProject().deleteClienteTelefonos(userID,clienteTelefonos.get(getAdapterPosition()).Telefono);
                     clienteTelefonos =dataBase.daoProject().getClienteTelefonosById(userID);
                     notifyItemRemoved(getAdapterPosition());
                 }
             });
         }
     }

    @NonNull
    @Override
    public recycleAdapterTelefonos.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_itemstelefonos, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull recycleAdapterTelefonos.MyViewHolder holder, int position) {
         int phone = clienteTelefonos.get(position).Telefono;
         holder.infoTelefonosItemsTxt.setText(Integer.toString(phone));
    }

    @Override
    public int getItemCount() {
        return clienteTelefonos.size();
    }
}
