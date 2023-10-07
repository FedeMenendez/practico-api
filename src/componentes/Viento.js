function Viento(props){
    return(
        <div className='viento'>
            <p>VELOCIDAD VIENTO</p>
            <p>{props.velocidadViento}km/h</p>
        </div>
    );
}
export default Viento;