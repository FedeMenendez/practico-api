# Dashboard de clima
Se realizo para este practico un dashboard de clima en donde se puede ver la temperatura actual, las temperaturas por horas en un grafico de barras, la temperatura maxima y minima del dia, el indice uv del dia, la velocidad del viento, la hora del amanecer y el atardecer, humedad, visibilidad y calidad del aire.

# Detalle de lo implementado
Para la creación del archivo se utilizó el comando npx create-react-app que crea los archivos necesarios para que funcione una pagina web base con react. Luego de esto se borró el contenido que estaba dentro del return del archivo App.js que está en la carpeta src, con esto nos queda una pagina web en blanco para poder colocar lo que nosotros deseamos.
El componente temperatura muestra en pantalla la temperatura actual
El componente temperaturaHoras muestra el grafico de barras de la temperatura por horas mediante css
El componente AmanYAtard muestra el horario del amanecer y atardecer del dia
El componente CalidadAire muestra el valor de la calidad del aire
El componente Humedad muestra el valor de humedad
El componente Indiceuv muestra el valor del indice uv
El componente Viento muestra la velocidad del viento
El componente Visibilidad muestra la velocidad del viento
Todos los valores tomados estan almacenados en el archivo api.json y pasados como props a los distintos componentes hijos.
Por ultimo es importante remarcar que tambien el json tenia incorporado las unidades de cada uno de las variables por lo que se decidio utilizar pasandolo como props a los distintos componentes.
Por ultimo se agrego en el archivo App.css los estilos de acuerdo al dashboard solicitado.

# Mejoras a realizar
1. Terminar de implementar el grafico de barra para que tome los datos del json ya que por cuestiones de tiempo no pudo realizarse
2. Mostrar solamente la hora de amanecer y atardecer (eliminar la parte del dia)
3. Agregar imagenes para dar una mejor visualizacion finar del dashboard

## Autor ✒️
* **Federico Menendez**  [Github](https://github.com/FedeMenendez)
* **Pagina web** (https://fedemenendez.github.io/practico3/)