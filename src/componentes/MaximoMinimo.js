function MaximoMinimo(props){
    return(
        <div className='maxima'>
            <p>Maxima {props.temperaturaMaxima}{props.unidadTemperatura}</p>
            <p>Minima {props.temperaturaMinima}{props.unidadTemperatura}</p>
        </div>
    );
}

export default MaximoMinimo;