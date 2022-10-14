using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public abstract class Entity<T>
    {
        private SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);
        public List<T> get(string atributes, string entity)
        {
            SqlCommand cmd = new SqlCommand($"Select {atributes} from {entity}", connection);
            List<T> entityList = new List<T>();

            connection.Open();
            cmd.ExecuteNonQuery();

            SqlDataReader dr = cmd.ExecuteReader();
            entityList = createClienteList(dr);
            return entityList;

        }

        public List<T> get(int id, string searchAtribute, string atributes, string entity)
        {
            SqlCommand cmd = new SqlCommand($"Select {atributes} from {entity} " +
                $"where {searchAtribute} = {id}", connection);
            List<T> entityList = new List<T>();

            connection.Open();
            cmd.ExecuteNonQuery();

            SqlDataReader dr = cmd.ExecuteReader();
            entityList = createClienteList(dr);
            return entityList;
        }

        public bool post(string entity, string values)
        {
            SqlCommand cmd = new SqlCommand($"INSERT INTO {entity} VALUES ({values})", connection);
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();
                return true;
            }
            catch (Exception)
            {
                return false;
                throw;
            }
        }

        public bool put(string entity,string sets, string condition)
        {
            SqlCommand cmd = new SqlCommand($"Update {entity} Set {sets} Where {condition}", connection);

            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();
                return true;
            }
            catch (Exception)
            {

                return false;
            }


        }

        public bool delete(string entity, string condition)
        {
            SqlCommand cmd = new SqlCommand($"Delete from {entity} where {condition}", connection);
            List<Cliente> clienteList = new List<Cliente>();

            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();

                SqlDataReader dr = cmd.ExecuteReader();
                return true;
            }
            catch (Exception)
            {
                return false;

            }
        }


        public virtual T createCliente(SqlDataReader dr)
        {
            List<T> clienteList = new List<T>();
            return clienteList.First();
        }

        public List<T> createClienteList(SqlDataReader dr)
        {
            List<T> clienteList = new List<T>();
            while (dr.Read())
            {
                clienteList.Add(createCliente(dr));
            };

            return clienteList;
        }
    }
}
