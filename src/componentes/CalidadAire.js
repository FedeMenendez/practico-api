function CalidadAire(props){
    let texto='';
    if(props.calidadAire<=12){
        texto='Bueno';
    }
    if(props.calidadAire<=37 && props.calidadAire>=13){
        texto='Aceptable';
    }
    if(props.calidadAire<=55 && props.calidadAire>=38){
        texto='Dañina a algunas personas';
    }
    if(props.calidadAire<=150 && props.calidadAire>=56){
        texto='Dañina a la salud';
    }
    if(props.calidadAire>151){
        texto='Muy dañina';
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