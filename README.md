# AngularTest

## Configuracion del Backend (Flask)

Estos son los pasos y comandos que debes correr al momento de clonar el proyecto:

Sobre la carpeta `/be`
- Ejecuta el siguiente comando para acceder al directorio del backend
    ```sh
    cd .\be\
    ```
- Crear un virtual Enviorement en la raiz de la ruta con el comando
    ```sh
    python -m venv nombre_del_venv
    ```
- Situarse sobre la ruta del Virtual Enviorement con el comando
    ```sh
    .\nombre_del_venv\Scripts\activate
    ```
- Instalar las dependencias del proyecto Flask con el comando
    ```sh
    pip install -r .\requirements.txt
    ```
- Cree un archivo `.env` en la raíz del proyecto con la siguiente estructura:
    ```sh
    DB_CONN = "mysql+pymysql://user:password@host:port/myDataBase"
    # Reemplaza user, password, host y port según tu configuración de MySQL.
    ```
> De ser necesario, borrar la carpeta migrations (solo si no le corre la migracion bien).
- Ejecuta el siguiente comando para preparar la migracion.
    ```sh
    flask db init
    ```
- Ejecuta el siguiente comando para correr la migracion.
    ```sh
    flask db migrate
    ```
- Ejecuta el siguiente comando para actualizar los datos migrados.
    ```sh
    flask db upgrade
    ```
- Ejecuta el siguiente comando para iniciar el proyecto Flask.
    ```sh
    py app.py
    ```
- Ya se debería tener el Backend ejecutado.