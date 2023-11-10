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

# Tercera Entrega
Para esta parte se divide en dos la pantalla y del lado izquierdo tenemos la informacion del clima y del lado derecho un mapa donde se mostrara la posicion de los colectivos que circulan en Buenos Aires.
Para la implemantacion del mapa se utilizo la libreria leaflet para react, en donde en pocas lineas de codigo podemos implementar el mapa. Para utilizarla debemos realizar la instalacion en la carpeta donde estamos realizando la pagina web y en mi caso decidi crear el componente transporte  para asi tener una implementacion mas sencilla y no sobrecargar al archivo App.js. Ademas debemos importar de la libreria el mapcontainer, titlelayer, popup, marker y L.
La variable icon que comienza en la linea 14 nos sive para que el icono del marcador y la leyenda del mismo (texto que aparece al clikear el icono), es por ello que se importa L.
Lo siguiente que se implementa para que funcione el mapa es lo que se encuentra desde la linea 70 hasta la linea 93 en donde colocamos el mapcontainer, el titlelayer para luego mediante la funcion de la linea 76 poder colocar el marcador correspondiente (Marker) y su leyenda (Popup).
Ademas para no mostrar todos los colectivos que arroje la api se decidio utilizar un select con el fin de tener solamente la ruta deseada. Para colocar las opciones lo que realizamos es en primera medida crear un array que contenga todas las rotas que proporciona la api, esto se encuentra desde la linea 27 a la 34 y luego dentro del select a las opciones se las coloca mediante la utilizacion de un map para que sean visibles en el menu desplegable.
Cuando se realiza una seleccion se llama a la funcion handleSelectChange, mediante el atributo onchange del select, en donde lo que se realiza es guardar en la variable de estado selectedLinea a la ruta elegida y guardar en la variable jsonFiltrado todos los datos que coincidan con la ruta seleccionada, para asi con este json poder colocar los marker y popup en el mapa.
Por ultimo queda remarcar que se debia realizar el pedido a la api, esta no se pudo realizar ya que la extension cors instalada no estaba funcionando por lo que se decidio tomar los datos de un json estatico a partir de un request realizado a la api. Vale remarcar que las lineas de codigo utilizadas para realizar el pedido a la api estan comentadas por lo que realizando unos pequeños ajustes en las variables y acomodando las lineas para realizar el pedido en el momento que se inicializa el componente y solucionando este problema con la extension deberia quedar funcionando con el pedido a la api 

# Cuarta Entrega
En esta parte lo primero que se cambió el color y el tamaño de la letra de las temperaturas maximas y minimas del dia.
Tambien se agrego el pedido a la api de la calidad de aire y se modificó los valores para determinar segun la variable solicitada en la api, por lo que el valor ya no está estático.
Lo otro que se agrego fue colocar un select en el inicio para seleccionar la ciudad que desea el usuario y que no quede con una ubicacion estática, ademas de colocar en el dashboard la ubicacion seleccionada.
En la app de transporte se agrego el codigo necesario para que realice el pedido a la api cada 31 segundos.

## Autor ✒️
* **Federico Menendez**  [Github](https://github.com/FedeMenendez)
* **Pagina web** (https://fedemenendez.github.io/practico-api/)

## Api de la cual se solicitaron los datos de transporte
https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=1468&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6
