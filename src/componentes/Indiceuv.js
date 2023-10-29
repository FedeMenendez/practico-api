function Indiceuv(props){
    let texto='';
    if(props.indiceUv<=2){
        texto='Bajo';
    }
    if(props.indiceUv<=5 && props.indiceUv>=3){
        texto='Moderado';
    }
    if(props.indiceUv<=7 && props.indiceUv>=6){
        texto='Alto';
    }
    if(props.indiceUv<=10 && props.indiceUv>=8){
        texto='Muy alto';
    }
    if(props.indiceUv>=11){
        texto='Extremadamente Alto';
    }
    return(
        <div className='indice'>
            <p>INDICE UV</p>
            <p>{props.indiceUv}</p>
            <p>{texto}</p>
        </div>
    );
}
export default Indiceuv;