function TemperaturaHoras (props){
    return(
        <div className='temperaturahoras'>
            {/* <p id='textotemperatura'>0°</p>
            <p id='textotemperatura'>20°</p>
            <p id='textotemperatura'>40°</p> */}
            <hr></hr>
            <div className='barras'>
            <div className='barra1' id='barras' style={{height:props.temperaturaHoras[0]*5}}><p id='textobarra'>00:00 {props.temperaturaHoras[0]}</p></div>
            <div className='barra2' id='barras'style={{height:props.temperaturaHoras[2]*5}}><p id='textobarra'>02:00 {props.temperaturaHoras[2]}</p></div>
            <div className='barra3' id='barras'style={{height:props.temperaturaHoras[4]*5}}><p id='textobarra'>04:00 {props.temperaturaHoras[4]}</p></div>
            <div className='barra4' id='barras' style={{height:props.temperaturaHoras[6]*5}}><p id='textobarra'>06:00 {props.temperaturaHoras[6]}</p></div>
            <div className='barra5' id='barras' style={{height:props.temperaturaHoras[8]*5}}> <p id='textobarra'>08:00 {props.temperaturaHoras[8]}</p></div>
            <div className='barra6' id='barras' style={{height:props.temperaturaHoras[10]*5}}><p id='textobarra'>10:00 {props.temperaturaHoras[10]}</p></div>
            <div className='barra7' id='barras' style={{height:props.temperaturaHoras[12]*5}}><p id='textobarra'>12:00 {props.temperaturaHoras[12]}</p></div>
            <div className='barra8' id='barras' style={{height:props.temperaturaHoras[14]*5}}><p id='textobarra'>14:00 {props.temperaturaHoras[14]}</p></div>
            <div className='barra9' id='barras' style={{height:props.temperaturaHoras[16]*5}}><p id='textobarra'>16:00 {props.temperaturaHoras[16]}</p></div>
            <div className='barra10' id='barras' style={{height:props.temperaturaHoras[18]*5}}><p id='textobarra'>18:00 {props.temperaturaHoras[18]}</p></div>
            <div className='barra11' id='barras' style={{height:props.temperaturaHoras[20]*5}}><p id='textobarra'>20:00 {props.temperaturaHoras[20]}</p></div>
            <div className='barra12' id='barras' style={{height:props.temperaturaHoras[22]*5}}><p id='textobarra'>22:00 {props.temperaturaHoras[22]}</p></div>
                 
            </div>
        </div> 
         
    );
}

export default TemperaturaHoras;