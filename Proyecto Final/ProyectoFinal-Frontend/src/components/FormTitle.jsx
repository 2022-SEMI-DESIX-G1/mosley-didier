export default function FormTitle(props){
    return(
        <div className="d-flex flex-column align-items-center my-3 text-center">
            <h2>{props.titulo}</h2>
            <h1 className="gr-text">∞ sigma</h1>
            <span>Una nueva forma de adquirir servicios en Panamá</span>
        </div>
    )
}