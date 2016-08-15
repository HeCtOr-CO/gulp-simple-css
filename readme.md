# Instrucciones

* Instalar nodejs desde https://nodejs.org/en/download/
* Descargar el proyecto de ejemplo desde https://github.com/HeCtOr-CO/gulp-simple-css/archive/master.zip,  o clonarlo utilizando el cliente de linea de comandos de git: 


        git clone https://github.com/hector-co/gulp-simple-css.git
* Ejecutar el archivo *install-packages.bat* para descargar los paquetes necesarios, este paso es necesario solo la primera vez que se descarga el proyecto
* Colocar los archivos css dentro de la carpeta *css*. La estructura de carpetas que se defina es solo para organizar los arhivos, no afectará en los archivos css generados (eliminar las carpetas de ejemplo)
* Ejecutar los archibos *.bat* según sea necesario:
    * **task-css.bat**, generará un solo archivo *(dist/application.css)* con todos los css
    * **task-min-css**, generará un solo archivo *(dist/application.min.css)*, minificado, con todos los css
