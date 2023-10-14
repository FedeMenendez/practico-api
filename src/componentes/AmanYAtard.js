function AmanYAtard(props){
    let aux1=props.horaAmanecer.toString();
    let aux2=props.horaAtardecer.toString();
    aux1=aux1.slice(11)
    aux2=aux2.slice(11)
    return(
        <div className='amanecer' >
            <p>amanecer: {aux1}</p>
            <p>atardecer: {aux2}</p>
        </div>
    );
}
export default AmanYAtard;