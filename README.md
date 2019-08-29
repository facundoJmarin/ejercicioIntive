# ejercicioIntive

La api-rest funciona ingresando un numero desde pantalla. Al clickear el botón se envía el id por el metodo POST al archivo main.py
Dentro del archivo main.py genera una url con el id que se recibio y mediante una funcion retorna la url completa a un template html.
En el html se carga un js donde mediante jquery atrapa la url y envia la petecion mediante ajax a la API de randomuser.
Como respuesta trae el json y con javascript muestro por consola y pantalla el resultado final.

Se utilizo:

Lenguaje:  
Python,javascript.

Frameworks:   
Flask     
jquery

Editor de código:     
Visual studio code.

Se necesita instalar:

Python: 
https://www.python.org/

Flask:       
pip install Flask

WTForms:       
pip install Flask-WTF

Una vez instalado se debe posicionar en la carpeta del proyecto y ejecutar el comando : "python main.py"
Luego deberá ingresar a un navegador y teclear: "localhost:8000".
