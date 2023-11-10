import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
//import { useMap } from 'react-leaflet/hooks'
import {Popup} from 'react-leaflet'
import { Marker } from 'react-leaflet'
// import  data from './transporte.json'
//import datosPrueba from './transport.json'
//import { Map } from 'leaflet'
import L from 'leaflet'
import {useState} from 'react';
import { useEffect} from 'react';

function Transporte(){
const [datosTransporte,setDatosTransporte]=useState(null);
const [loading, setLoading]=useState(true);
const [jsonFiltradoPorLinea, setJsonFiltradoPorLinea] = useState([]);
let icon=new L.icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
        iconSize: [28, 45],
        iconAnchor: [22, 54],
        popupAnchor: [-3, -56],
    })

    useEffect(() => {
        const datafetch = () =>{
        setLoading(true);
        fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
            .then((resp) => resp.json())
            .then((data) => {
            setDatosTransporte(data);
            setLoading(false);
        })
        .catch((ex) => {
        console.error('error cargando API',ex);
        });
    };
    datafetch();
    const interval = setInterval(datafetch, 31000);
    return () => clearInterval(interval);
}, []);

if (!loading){
    let datas=[datosTransporte[0].route_short_name];
    let j=1;
    for (let i=0;i<datosTransporte.length;i++){
        if (!datas.includes(datosTransporte[i].route_short_name)){
            datas[j]=datosTransporte[i].route_short_name
            j++
        }
    }
    
const handleSelectChange = (event) => {
    const selectedLinea = event.target.value;
    const jsonFiltrado=datosTransporte.filter((dato)=>dato.route_short_name===selectedLinea);
    setJsonFiltradoPorLinea(jsonFiltrado);
    };

 
    return(
        <div>
            <label>Selecciona la linea de colectivo</label>
            <select onChange={handleSelectChange}>
                {datas.map((datos)=>(
                <option>{datos}</option>
            ))}
            </select>
        <div className='leaflet-container'>
            <MapContainer center={[datosTransporte[0].latitude,datosTransporte[0].longitude]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {jsonFiltradoPorLinea.map((datos)=>(
                <Marker position={[datos.latitude,datos.longitude]} icon={icon}>
                    <Popup>
                        direction: {datos.direction===1 ? 'Ida':'Vuelta' } <br></br>
                        id: {datos.id} <br></br>
                        route: {datos.route_short_name}<br></br>
                        trip:{datos.trip_headsign}
                    </Popup>
                </Marker>
            ))}
            </MapContainer>
        </div>
        </div>
    )
}
else{
    return(
      <h1>Loading......</h1>
    )
  }
}
export default Transporte;