# ejercicioIntive

La api-rest funciona ingresando un numero desde la pantalla. Al clickear el botón envia el dato por el metodo POST al archivo main.py
Dentro del archivo main.py genera una url con el id que se recibio y mediante una funcion retorna a un template html la url completa.
En el html se carga un js donde mediante jquery atrapa la url y envia la petecion mediante ajax a la API de randomuser.
Como respuesta trae el json y con javascript muestro por consola y por pantalla el resultado final.

Se utilizo:

Lenguaje: Python,javascript
Frameworks: Flask, jquery

Se necesita instalar WTForms.
