function Temperatura (props){
   
    return(
        <div className="temperatura">
            <p>{props.auxHora[0]}</p> 
            <p>{props.auxHora[1]}</p>
            <p>{props.temperatura}{props.unidadTemperatura}</p>
        </div>

    );
}
export default Temperatura;