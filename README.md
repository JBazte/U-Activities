# U-Activities
## Built with 🛠️

* [Trello](https://trello.com) - Project Management
* [Microsoft Visual Studio](https://visualstudio.microsoft.com) - IDE

## Descripción del proyecto

U-Activities es una aplicación web server desarrollada en Node.js que utiliza una base de datos MySQL para gestionar actividades. La aplicación se ejecuta en el puerto 3011 y proporciona diversas funcionalidades para usuarios no registrados, usuarios registrados, administradores y sponsors.

## Configuración

A continuación, se detallan los pasos para configurar y ejecutar el proyecto:

1. Clona el repositorio desde GitHub:

```shell
git clone https://github.com/JBazte/U-Activities.git
```

2. Instala las dependencias necesarias:

```shell
cd U-Activities
npm install
```

3. Crea una base de datos MySQL y asegúrate de tener los datos de conexión disponibles.

4. Configura las variables de entorno:

Crea un archivo `.env` en el directorio raíz del proyecto y define las siguientes variables:

```plaintext
DB_HOST=<<Dirección de host de la base de datos>>
DB_PORT=<<Puerto de la base de datos>>
DB_USER=<<Usuario de la base de datos>>
DB_PASSWORD=<<Contraseña de la base de datos>>
DB_NAME=<<Nombre de la base de datos>>
JWT_SECRET=<<Clave secreta para firmar los tokens JWT>>
```

5. Ejecuta el servidor:

```shell
npm start
```

El servidor estará disponible en `http://localhost:3011`.

## Funcionalidades

A continuación, se describen las funcionalidades disponibles en la aplicación:

- Un usuario no registrado puede ver todas las actividades.
- Un usuario no registrado puede ver los detalles de una actividad específica.
- Un usuario no registrado puede registrarse y obtener su token, y configurar sus preferencias.
- Un usuario registrado puede hacer login y obtener su token.
- Un usuario registrado puede editar su propio perfil de usuario.
- Un usuario registrado puede apuntarse a una actividad realizando una solicitud POST a la tabla de participación.
- Un usuario registrado puede darse de baja de una actividad.
- Un administrador puede hacer login.
- Un administrador puede registrar a un sponsor utilizando su token y devolviendo un token de sponsor que no caduca.
- Un administrador puede dar de baja a un sponsor.
- Un sponsor puede hacer login.
- Un sponsor puede crear una nueva actividad utilizando su token de sponsor.

## Estructura del proyecto

El proyecto sigue la siguiente estructura de directorios y archivos:

- `server.js`: Archivo principal del servidor.
- `controllers/`: Carpeta que contiene los controladores de la aplicación.
- `docs/`: Carpeta que contiene el archivo `swagger.js`, que describe la documentación de la API utilizando Swagger.
- `middleware/session.js`: Archivo que contiene funciones de autenticación para los procesos de login.
- `models/`: Carpeta que contiene los modelos de la base de datos, junto con el archivo `index.js` de los modelos.
- `routes/`: Carpeta que contiene las rutas de la aplicación, junto con el archivo `index.js` de las rutas.
- `test/`: Carpeta que contiene archivos de texto HTTP utilizados para realizar llamadas a la base de datos durante las pruebas.
- `utils/`: Carpeta que contiene los handlers de errores, funciones para JWT, passwords y validadores.
- `validators/`: Carpeta que contiene validadores específicos para cada ruta.

## Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.