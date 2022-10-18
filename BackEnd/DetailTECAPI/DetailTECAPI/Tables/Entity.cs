using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace DetailTECAPI.Tables
{
    public abstract class Entity<T>
    {
        protected SqlConnection connection = new SqlConnection(Connection.Connection.ConnectionString);

        /// <summary>
        /// Función encargada de hacer los get hacia la base de datos en sql
        /// </summary>
        /// <param name="atributes">Atributos que se desean consultar a la base de datos</param>
        /// <param name="entity">Entidad a la cual se le quieren consultar los atributos</param>
        /// <returns>Retorna una lista con el resultado de la búsqueda</returns>
        public List<T> get(string atributes, string entity)
        {
            SqlCommand cmd = new SqlCommand($"Select {atributes} from {entity}", connection);
            List<T> entityList = new List<T>();

            connection.Open();
            cmd.ExecuteNonQuery();

            SqlDataReader dr = cmd.ExecuteReader();
            entityList = createEntityList(dr);
            return entityList;

        }

        /// <summary>
        /// Se encarga de retornar un elemento en específico de la base de datos en función de un atributo
        /// específico
        /// </summary>  
        /// <param name="id">Valor del atributo por el cual se quiere buscar</param>
        /// <param name="searchAtribute">Nombre del atributo con el cual se realizará la búsqueda</param>
        /// <param name="atributes">Atributos que se desean consultar de la entidad a buscar</param>
        /// <param name="entity">Nombre de la entidad a consultar</param>
        /// <returns>retorna una lista con el resultado de la búsqueda</returns>
        public List<T> get(string id, string searchAtribute, string atributes, string entity)
        {
            SqlCommand cmd = new SqlCommand($"Select {atributes} from {entity} " +
                $"where {searchAtribute} = {id}", connection);
            List<T> entityList = new List<T>();

            connection.Open();
            cmd.ExecuteNonQuery();

            SqlDataReader dr = cmd.ExecuteReader();
            entityList = createEntityList(dr);
            return entityList;
        }

        /// <summary>
        /// Agrega una nueva tupla a la base de datos
        /// </summary>
        /// <param name="entity">Nombre de la entida a agregar</param>
        /// <param name="values">Valores que se desean agregar</param>
        /// <returns>Retorna true si se logró agregar correctamente, false en caso contrario</returns>
        public bool post(string entity, string values)
        {
            SqlCommand cmd = new SqlCommand($"INSERT INTO {entity} VALUES ({values})", connection);
            try
            {
                connection.Open();
                cmd.ExecuteNonQuery();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString);
                return false;
                throw;
            }
        }

        /// <summary>
        /// Se encarga de modificar una tupla específica de la base de datos
        /// </summary>
        /// <param name="entity">Entidad a la cual se le desea relizar la modificación</param>
        /// <param name="sets">Datos que se desean actualizar/param>
        /// <param name="condition">Condición de búsqueda para realizar la actualización</param>
        /// <returns>Retorna true si se logró realizar la modificación, false en caso contrario</returns>
        public bool put(string entity, string sets, string condition)
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

        /// <summary>
        /// Elimina una tupla a partir de una condición de búsqueda
        /// </summary>
        /// <param name="entity">Entida de en la cual se desea relizar la búsqueda para eliminar</param>
        /// <param name="condition">Condición a tomar en cuenta para realizar la eliminación</param>
        /// <returns>Retorna true en caso de que logre realizar la eliminación, false en caso contrario</returns>
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

        /// <summary>
        /// Método virtual que se encarga de la creación de los objetos Entidad para cada caso caso específico
        /// de entidad, este debe ser sobreescrito para asegurar el correcto funcionamiento de las demás funciones
        /// </summary>
        /// <param name="dr">Reader de sql que contiene los atributos consultados</param>
        /// <returns>Retorna un objeto específico a partir de los datos que se cargaron en el reader desde 
        /// sql </returns>
        public virtual T createEntity(SqlDataReader dr)
        {
            return createEntity(dr);
        }

        /// <summary>
        /// Crea una lista de entidades a parir del reader retornado de una consulta en sql
        /// </summary>
        /// <param name="dr">Reader de sql que contiene la respuesta de una consulta realizada</param>
        /// <returns>Retorna una lista de </returns>
        public List<T> createEntityList(SqlDataReader dr)
        {
            List<T> entityList = new List<T>();
            while (dr.Read())
            {
                entityList.Add(createEntity(dr));
            };

            return entityList;
        }

        protected DateTime dateFormat(SqlDataReader dr, string param)
        {

            DateTime dateOnly;
            DateTime.TryParse(dr[param].ToString(), out dateOnly);

            return dateOnly;
        }
    }
}
