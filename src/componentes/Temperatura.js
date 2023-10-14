function Temperatura (props){
    let auxHora=props.horaActual.toString();
    auxHora=auxHora.split('T');
    return(
        <div className="temperatura">
            <p>{auxHora[0]}</p> 
            <p>{auxHora[1]}</p>
            <p>{props.temperatura}{props.unidadTemperatura}</p>
        </div>

    );
}
export default Temperatura;