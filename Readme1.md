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

# Segunda Entrega
En esta parte los datos ya no están fijos, tomados desde un archivo .json, sino que se realizó esun fetch del cual vamos a obtener en cada consulta que le hagamos los datos que estaban fijos en el .json de la parte anterior, con esto ya van a cambiar los datos dependiendo de la hora del dia en la que pidamos los datos.
Se agregó la muestra de la fecha y la hora que fueron tomados los datos, la api permite elegir entre distintas zonas horarias, en este caso se eligió GMT 0 por lo que se deben restar tres horas para obtener la hora actual de la argentina, lo mismo secede para las horas de amanecer y atardecer que muestra el dashboard. La ubicación que se eligió es Buenos Aires. No se muestra en el dashboard ya que la api entrega la posicion en longitud y latitud y no por ciudades
En el grafico se decidió eliminar la barra lateral con las temperaturas ya que no se pudo hacer coincidir la altura de las barras con la posicion de los numeros. Se puede utilizar una libreria de graficos para poder tener una mejor visualizacion. Para complementar a lo perdido se colocó el valor de temperatura dentro de la barra. Se decidio que las barras comiencen desde arriba hacia abajo y colocarlo en la posicion superior ya que no se pudo realizar que las barras aumenten su tamaño hacia arriba. Tambien se decidio multiplicar por 5 al valor de las barras para mejorar la visualizacion en las diferencias de temperatura
Es importante remarcar que el unico dato que quedo fijo fue el de calidad de aire ya que no se lo pidio para que se lo obtenerlo de la api.
Es importante remarcar que se utilizó el useefect para que no este tomando datos constantemente de la api sino cuando se actualiza la pagina. Ademas como hay una demora de tiempo en que se obtienen todos los datos que se obtienen de la api se agregó la variable de estado loading para que se muestren los datos recien cuando se almaceno en la variable de estado data los valores necesarios. Si no lo hacemos arroja un error en tiempo de ejecucion. 
Como mejora a realizar queda agregar imagenes segun el estado del clima para dar una mejor visualizacion del dashboard

## Autor ✒️
* **Federico Menendez**  [Github](https://github.com/FedeMenendez)
* **Pagina web** (https://fedemenendez.github.io/practico-api/)