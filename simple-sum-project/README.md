# Simple Sum Project

Este proyecto es una aplicación web simple que permite a los usuarios sumar dos números. La interfaz de usuario es intuitiva y está diseñada para ser fácil de usar.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos:

- `index.html`: La página principal que contiene la estructura básica de HTML y los elementos de la interfaz de usuario.
- `styles/style.css`: Archivo CSS que define el diseño visual de la página, incluyendo colores, fuentes y disposición de los elementos.
- `scripts/app.js`: Archivo JavaScript que maneja la lógica de la aplicación, incluyendo la suma de los números ingresados por el usuario.

## Instrucciones para Desplegar en Digital Ocean

1. **Crear un Droplet**: Inicia sesión en tu cuenta de Digital Ocean y crea un nuevo Droplet. Puedes elegir una imagen de Ubuntu para este proyecto.

2. **Instalar un Servidor Web**: Una vez que tu Droplet esté en funcionamiento, conéctate a él a través de SSH y instala un servidor web como Nginx o Apache. Por ejemplo, para instalar Nginx, puedes usar el siguiente comando:
   ```
   sudo apt update
   sudo apt install nginx
   ```

3. **Subir Archivos**: Sube los archivos del proyecto a tu Droplet. Puedes usar `scp` o cualquier cliente FTP. Asegúrate de que los archivos estén en el directorio raíz del servidor web (por ejemplo, `/var/www/html` para Nginx).

4. **Configurar el Servidor**: Asegúrate de que tu servidor web esté configurado para servir archivos estáticos. Si usas Nginx, la configuración predeterminada debería funcionar bien.

5. **Acceder a la Aplicación**: Abre un navegador web y accede a la dirección IP de tu Droplet. Deberías ver la aplicación de suma en funcionamiento.

## Funcionalidad

La aplicación permite a los usuarios ingresar dos números y, al hacer clic en un botón, se muestra la suma de esos números en la pantalla. Es un proyecto ideal para principiantes que desean aprender sobre HTML, CSS y JavaScript.