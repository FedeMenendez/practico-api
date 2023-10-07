function Humedad(props){
    return(
        <div className='humedad'>  
            <p>HUMEDAD</p>
            <p>{props.humedad}{props.unidadHumedad}</p>
        </div>
    );
}
export default Humedad;