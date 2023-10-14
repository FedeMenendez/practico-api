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
//import data from './resp.json';
import {useState} from 'react';
import { useEffect} from 'react';
function App() {
  const [datosClima,setDatosClima]=useState(null)
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    setLoading(true);
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&hourly=temperature_2m,relativehumidity_2m,visibility,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=GMT&forecast_days=1")
      .then((resp) => resp.json())
      .then((data) => {
        setDatosClima(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);
  
  if(!loading){
    const horaActual=datosClima.current_weather.time;
    let aux1=horaActual.toString();
    aux1=aux1.slice(11,-3)
    if (aux1.startsWith('0')){
    aux1=aux1.slice(1)
    }
    const temperatura=datosClima.current_weather.temperature;
    const unidadTemperatura= datosClima.hourly_units.temperature_2m
    const temperaturaMinima= datosClima.daily.temperature_2m_min;
    const temperaturaMaxima= datosClima.daily.temperature_2m_max;
    const indiceUv=datosClima.daily.uv_index_max;
    const velocidadViento=datosClima.current_weather.windspeed;
    const unidadViento=datosClima.current_weather_units.windspeed;
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
        <p className='texto1'>Today</p> 
        {/* <p>{horaActual}</p>  */}
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
    );
  }
}

export default App;
