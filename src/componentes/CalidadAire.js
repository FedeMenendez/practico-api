function CalidadAire(props){
    let texto='';
    if(props.calidadAire<=50){
        texto='Bueno';
    }
    if(props.calidadAire<=100 && props.calidadAire>=51){
        texto='Moderado';
    }
    if(props.calidadAire>100){
        texto='Dañino para la salud';
    }
    
    return(
        <div className='calidad'>
            <p>CALIDAD AIRE</p> 
            <p>{props.calidadAire}</p>
            <p>{texto}</p>
        </div>
    );
}
export default CalidadAire;