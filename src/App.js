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
import { useEffect} from 'react';
function App() {
  const [datosClima,setDatosClima]=useState(null)
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    setLoading(true);
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1")
      .then((resp) => resp.json())
      .then((data) => {
        setDatosClima(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error('error cargando API',ex);
      });
  }, []);
  
  if(!loading){
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
    const calidadAire=10//datosClima.hourly.european_aqi[10];
    const temperaturaHoras=datosClima.hourly.temperature_2m;
  
    return(
      <div className='App'>
        <div className='Clima'>
          <p className='texto1'>Today</p> 
          <Temperatura temperatura={temperatura} unidadTemperatura={unidadTemperatura} horaActual={horaActual}/>
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
          {/* <h1>Transporte</h1> */}
          <Transporte/>
        </div>
      </div>
    );
  }
  else{
    return(
      <h1>Loading......</h1>
    )
  }
}

export default App;
