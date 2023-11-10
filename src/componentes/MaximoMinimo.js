function MaximoMinimo(props){
    return(
        <div className='maxima'>
            <p id='maximo'>Max: {props.temperaturaMaxima}{props.unidadTemperatura}</p>
            <p id="minimo">Min: {props.temperaturaMinima}{props.unidadTemperatura}</p>
        </div>
    );
}

export default MaximoMinimo;