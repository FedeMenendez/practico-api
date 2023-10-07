function Viento(props){
    return(
        <div className='viento'>
            <p>VELOCIDAD VIENTO</p>
            <p>{props.velocidadViento}{props.unidadViento}km/h</p>
        </div>
    );
}
export default Viento;