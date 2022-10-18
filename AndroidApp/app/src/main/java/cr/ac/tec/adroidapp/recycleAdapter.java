package cr.ac.tec.adroidapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class recycleAdapter extends RecyclerView.Adapter<recycleAdapter.MyViewHolder> {

     private List<ClienteTelefonos> clienteTelefonos;

     public recycleAdapter(List<ClienteTelefonos> clienteTelefonos){
         this.clienteTelefonos = clienteTelefonos;
     }

     public class MyViewHolder extends RecyclerView.ViewHolder{
         private TextView infoTelefonosItemsTxt;

         public MyViewHolder(final View view){
             super(view);
             infoTelefonosItemsTxt = view.findViewById(R.id.tv_infoTelefonoItems);
         }
     }

    @NonNull
    @Override
    public recycleAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_items, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull recycleAdapter.MyViewHolder holder, int position) {
         int phone = clienteTelefonos.get(position).Telefono;
         holder.infoTelefonosItemsTxt.setText("1XD");

    }

    @Override
    public int getItemCount() {
        return clienteTelefonos.size();
    }
}
