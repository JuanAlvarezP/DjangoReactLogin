# CRUD de tareas con Login en Django (backend) y React (frontend)
Esta es una aplicación web básica para manejar tareas, permite crear, mostrar, actualizar y borrar tareas. Así mismo contiene un sistema de registro de usuarios e inicio de sesión para que cada usuario pueda administrar sus tareas de manera segura.
## ¿Por qué utilicé estas tecnologías?
- Django es un framework que me llamaba mucho la atención debido a mi acercamiento con python estos últimos meses. Al crear esta aplicación pude entender mucho mejor su funcionamiento y propósito.
- React me pareció una perfecta adición con Django, debio a su popularidad. Lo utilicé para que la aplicación tenga una interfaz dinámica, a pesar de ser un poco básica.
## Desafíos
Lo que sin duda me costó más en este proyecto, fue la integración mútua entre el backend y frontend. Al trabajar por primera vez con estas tecnologías me costó entenderlas, pero a pesar de todo eso crear este proyecto fue de mucha ayuda para mejorar mis conocimientos. 

### Pasos para empezar a trabajar con este proyecto
- Lo primero es crear un directorio donde se vaya a almacenar todo el proyecto, dentro de este directorio empezaremos creando un entorno virtual, de esta manera podremos instalar todas las dependencias solo para esta ocasión.
  - Dentro del directorio, escribimos este comando:
    #### `python3 -m venv env`
  - Ahora, lo activamos:
    #### `source/env/bin/activate`
  Cabe recalcar que estos comandos son para sistemas operativos MacOS, si estás en Windows los comandos deberían ser así:
  - #### `python -m venv env`
  - #### `env/Scripts/activate.bat`
- Una vez activado el entorno virtual, instalaremos todas las dependencias necesarias para el proyecto. Para instalarlas necesitaremos crear un archivo requirements.txt en donde debemos poner esto:
  - #### 
        Django
        django-cors-headers
        djangorestframework
        djangorestframework-simplejwt
        PyJWT
        pytz
        sqlparse
        psycopg2-binary
        python-dotenv
    Guardamos el archivo y escribimos el siguiente comando en la terminal:
    #### `pip install -r requirements.txt`
    Con esto tendremos instaladas y listas para crear el proyecto con Django.
  - Iniciamos el proyecto de django con lo siguiente:
    - #### `djangp-admin startproject backend`
      Con esto creamos un directorio nuevo llamado backend

    - Luego nos movemos al directorio nuevo:
      #### `cd backend`
    
    - Ahora inicializamos una aplicacion llamada api, para manejar la autenticación, y la lógica en general.
      #### `python manage.py startapp api`

De esta manera se puede empezar a trabajar con Django para el proyecto.
