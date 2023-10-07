function Temperatura (props){
    
    return(
        <div className="temperatura">
            <p>{props.temperatura}{props.unidadTemperatura}</p>
        </div>

    );
}
export default Temperatura;