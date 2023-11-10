import './App.css';
import Temperatura from "./componentes/Temperatura.js";
import TemperaturaHoras  from './componentes/TemperaturaHoras';
import Humedad from './componentes/Humedad';
import Indiceuv from './componentes/Indiceuv';
import Viento from './componentes/Viento';
import AmanYAtard from './componentes/AmanYAtard';
import Visibilidad from './componentes/Visibilidad';
import CalidadAire from './componentes/CalidadAire';
import MaximoMinimo from './componentes/MaximoMinimo';
import Transporte from './componentes/Transporte';
//import data from './resp.json';
import {useState} from 'react';
//import { useEffect} from 'react';
function App() {
  const [datosClima,setDatosClima]=useState(null)
  const [datosAire,setDatosAire]=useState(null)
  const [loading, setLoading]=useState(true)
  const [loadingAire, setLoadingAire]=useState(true)
  const [loadingCiudad, setLoadingCiudad]=useState(true);
  const [nombreCiudad, setNombreCiudad] = useState ('');
  const [datosCiudad, setDatosCiudad] = useState (null);
  const [ubicacion,setUbicacion]=useState();
  let datoPais=[];
  
  function handleClick(e){
    if(e===''){
      setNombreCiudad('+');
    }
    setNombreCiudad(e.target.value);
  }
  function enClick () {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nombreCiudad}&count=10&language=es&format=json`)
    .then((resp) => resp.json())
    .then((data) => {
    setDatosCiudad(data);
    setLoadingCiudad(false);
      })
    }
  if(!loadingCiudad){
    datoPais[0]='Seleccione'
    let j=1;
    for (let i=0;i<datosCiudad.results.length;i++){
      datoPais[j]=datosCiudad.results[i].country + ',' + datosCiudad.results[i].admin1;
      j++
      }
    }
        
  function handleSelectChange(event){
    let i=0;
    while(datoPais[i]!==event.target.value){
      i++
      }
    setUbicacion(datoPais[i]);
    const latitude=datosCiudad.results[i-1].latitude;
    const longitude=datosCiudad.results[i-1].longitude;
  
 // useEffect(() => {
    setLoading(true);
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,windspeed_10m,is_day&hourly=temperature_2m,relativehumidity_2m,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1`)
      .then((resp) => resp.json())
      .then((data) => {
        setDatosClima(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error('error cargando API',ex);
      });
  //}, []);
  //useEffect(() => {
    setLoading(true);
    fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi&timezone=America%2FSao_Paulo`)
      .then((resp) => resp.json())
      .then((data) => {
        setDatosAire(data);
        setLoadingAire(false);
      })
      .catch((ex) => {
        console.error('error cargando API Calidad de aire',ex);
      });
  //}, []);
  } 
  if(!loading&&!loadingAire){
    const horaActual=datosClima.current.time;
    let aux1=horaActual.toString();
    aux1=aux1.slice(11,-3)
    if (aux1.startsWith('0')){
    aux1=aux1.slice(1)
    }
    const temperatura=datosClima.current.temperature_2m;
    const unidadTemperatura= datosClima.hourly_units.temperature_2m
    const temperaturaMinima= datosClima.daily.temperature_2m_min;
    const temperaturaMaxima= datosClima.daily.temperature_2m_max;
    const indiceUv=datosClima.hourly.uv_index[aux1];
    const velocidadViento=datosClima.current.windspeed_10m;
    const unidadViento=datosClima.current_units.windspeed_10m;
    const humedad=datosClima.hourly.relativehumidity_2m[aux1];
    const unidadHumedad=datosClima.hourly_units.relativehumidity_2m;
    const visibilidad=datosClima.hourly.visibility[aux1]
    const visibilidadUnidad=datosClima.hourly_units.visibility;
    const horaAtardecer=datosClima.daily.sunset;
    const horaAmanecer=datosClima.daily.sunrise;
    const calidadAire=datosAire.current.european_aqi;
    const temperaturaHoras=datosClima.hourly.temperature_2m;
  
    return(
      <div className='App'>
        <div className='Clima'>
          <p className='texto1'>Today</p> 
          <Temperatura temperatura={temperatura} unidadTemperatura={unidadTemperatura} horaActual={horaActual} ubicacion={ubicacion}/>
          <TemperaturaHoras temperaturaHoras={temperaturaHoras}/>
          <p className='texto'>Highlights</p>
          <Indiceuv indiceUv={indiceUv}/>
          <Viento velocidadViento={velocidadViento} unidadViento={unidadViento}/>
          <AmanYAtard horaAmanecer={horaAmanecer} horaAtardecer={horaAtardecer}/>
          <Humedad humedad={humedad} unidadHumedad={unidadHumedad}/>
          <Visibilidad visibilidad={visibilidad} visibilidadUnidad={visibilidadUnidad}/>
          <CalidadAire calidadAire={calidadAire}/>
          <MaximoMinimo temperaturaMinima={temperaturaMinima} temperaturaMaxima={temperaturaMaxima} unidadTemperatura={unidadTemperatura}/>
        </div> 
        <div className='Transporte'>
          <Transporte/>
        </div>
      </div>
    );
  }
  else{
    return(
      
      <div>
        <input type='text' id="nombre" placeholder='Nombre Ciudad' value={nombreCiudad} onChange={handleClick}></input>
        <button id="ingresoNombre" onClick={enClick}>Ingreso Ciudad</button>
        <select onChange={handleSelectChange}>
          {datoPais.map((datos)=>(
            <option>{datos}</option>
          ))}
        </select>
        <h1>Loading......</h1>
      </div>
    )
  }
}

export default App;
