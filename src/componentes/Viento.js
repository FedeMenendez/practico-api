function Viento(props){
    return(
        <div className='viento'>
            <p>VELOCIDAD VIENTO</p>
            <p>{props.velocidadViento}{props.unidadViento}</p>
        </div>
    );
}
export default Viento;