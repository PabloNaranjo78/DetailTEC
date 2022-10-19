package cr.ac.tec.adroidapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import cr.ac.tec.adroidapp.gui.GestionCliente;

public class recycleAdapter extends RecyclerView.Adapter<recycleAdapter.MyViewHolder> {

     private List<ClienteTelefonos> clienteTelefonos;
     private DataBase dataBase;


     public recycleAdapter(List<ClienteTelefonos> clienteTelefonos, DataBase dataBase){
         this.clienteTelefonos = clienteTelefonos;
         this.dataBase = dataBase;
     }

     public class MyViewHolder extends RecyclerView.ViewHolder{
         private TextView infoTelefonosItemsTxt;

         public MyViewHolder(final View view){
             super(view);
             infoTelefonosItemsTxt = view.findViewById(R.id.tv_infoTelefonoItems);
             view.findViewById(R.id.btn_eliminarTelefonos).setOnClickListener(new View.OnClickListener() {
                 @Override
                 public void onClick(View view) {
                     dataBase.daoProject().deleteClienteTelefonos(clienteTelefonos.get(getAdapterPosition()).IDCliente,clienteTelefonos.get(getAdapterPosition()).Telefono);
                     clienteTelefonos =dataBase.daoProject().getClienteTelefonosById(123);
                     notifyItemRemoved(getAdapterPosition());
                 }
             });
         }
     }

    @NonNull
    @Override
    public recycleAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_itemstelefonos, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull recycleAdapter.MyViewHolder holder, int position) {
         int phone = clienteTelefonos.get(position).Telefono;
         holder.infoTelefonosItemsTxt.setText(Integer.toString(phone));

    }

    @Override
    public int getItemCount() {
        return clienteTelefonos.size();
    }
}
