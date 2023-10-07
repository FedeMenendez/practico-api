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
import data from './api.json';

function App() {
  const temperatura=data.hourly.temperature_2m[10];
  const unidadTemperatura= data.hourly_units.temperature_2m
  const temperaturaMinima= data.daily.temperature_2m_min;
  const temperaturaMaxima= data.daily.temperature_2m_max;
  const indiceUv=data.daily.uv_index_max;
  const velocidadViento=data.daily.windspeed_10m_max;
  const unidadViento=data.daily_units.windspeed_10m_max;
  const humedad=data.hourly.relativehumidity_2m[10];
  const visibilidad=data.hourly.visibility[10]
  const horaAmanecer=data.daily.sunrise;
  const horaAtardecer=data.daily.sunset;
  const calidadAire=data.hourly.european_aqi[10];
  return(
  <div className='App'> 
    <p className='texto1'>Today</p>  
    <Temperatura temperatura={temperatura} unidadTemperatura={unidadTemperatura}/>
    <TemperaturaHoras/>
    <p className='texto'>Highlights</p>
    <Indiceuv indiceUv={indiceUv}/>
    <Viento velocidadViento={velocidadViento} unidadViento={unidadViento}/>
    <AmanYAtard horaAmanecer={horaAmanecer} horaAtardecer={horaAtardecer}/>
    <Humedad humedad={humedad}/>
    <Visibilidad visibilidad={visibilidad}/>
    <CalidadAire calidadAire={calidadAire}/>
    <MaximoMinimo temperaturaMinima={temperaturaMinima} temperaturaMaxima={temperaturaMaxima} unidadTemperatura={unidadTemperatura}/>
  </div>
  );
}

export default App;
