import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
//import { useMap } from 'react-leaflet/hooks'
import {Popup} from 'react-leaflet'
import { Marker } from 'react-leaflet'
// import  data from './transporte.json'
import datosPrueba from './transport.json'
//import { Map } from 'leaflet'
import L from 'leaflet'
import {useState} from 'react';
//import { useEffect} from 'react';
function Transporte(){
const position = [datosPrueba[0].latitude,datosPrueba[0].longitude];
//const lineasFiltradas = ['1468', '1608', '1648', '1646', '316', '1636', '1703', '1', '1702',"1609","1708","1641","830","2",'839','1635','1719','1635','1719','1745','2030','1711','31','32','562','69','70','198','197','199',200];
//const lineasFiltradas1=['153A', '7B', '148I', '148H', '148D', '148C', '159A', '7A', '159K', '148G', '159B', '159C', '148B', '133A', '12A', '26A', '140A', '10A', '184A', '133D', '68A', '34B', '106A', '130A', '130B', '44A', '101B', '28B', '101A', '247R5', '99A', '128A', '1A', '158A', '75A', '32A', '295TR1', '707ROJ', '707VER', '437A', '407A', '707AZU', '65A', '721B', '721A', '195B', '195C']
const [selectedLinea,setLineaElegida]=useState('')
//const [datosTransporte,setDatosTransporte]=useState(null)
//const [loading, setLoading]=useState(true)
const [jsonFiltradoPorLinea, setJsonFiltradoPorLinea] = useState([]);
let icon=new L.icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
        iconSize: [28, 45],
        iconAnchor: [22, 54],
        popupAnchor: [-3, -56],
    })

    let datas=[datosPrueba[0].route_short_name]
    let j=1;
    for (let i=1;i<datosPrueba.length;i++){
        if (!datas.includes(datosPrueba[i].route_short_name)){
            datas[j]=datosPrueba[i].route_short_name
            j++
        }
    }
    
//console.log (datas)    
const handleSelectChange = (event) => {
    const selectedLinea = event.target.value;
    setLineaElegida(selectedLinea);
    const jsonFiltrado=datosPrueba.filter((dato)=>dato.route_short_name===selectedLinea);
    setJsonFiltradoPorLinea(jsonFiltrado);
  };
//  console.log(selectedLinea)
//  console.log(jsonFiltradoPorLinea)
//if (selectedLinea!==''){
    //let apiUrl='https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6&route_short_name=1468'
    //apiUrl += '&route_short_name=1468'
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //         setDatosTransporte(data);
    //         setLoading(false);
    //     })
    //     .catch((ex) => {
    //     console.error('error cargando API',ex);
    //     });
    // }, []);
//}
//if (!loading){ 
return(
    <div>
        <label>Selecciona la linea de colectivo</label>
        <select onChange={handleSelectChange}>
            {datas.map((datos)=>(
                <option>{datos}</option>
        ))}
        </select>
    <div className='leaflet-container'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {jsonFiltradoPorLinea.map((datos)=>(
            <Marker position={[datos.latitude,datos.longitude]} icon={icon}>
                <Popup>
                    direction: {datos.direction} <br></br>
                    id: {datos.id} <br></br>
                    route: {datos.route_short_name}<br></br>
                    trip:{datos.trip_headsign}
                </Popup>
            </Marker>
        ))}
        {/* <Marker position={position}>
            <Popup>
               direction: {data[0].direction} <br></br>
               id: {data[0].id} <br></br>
               route: {data[0].route_short_name}
            </Popup>
        </Marker> */}
        </MapContainer>
    </div>
    </div>
)
}
//}
export default Transporte;