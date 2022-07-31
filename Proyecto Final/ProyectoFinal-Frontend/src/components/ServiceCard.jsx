export default function ServiceCard(props){
    return(
        <>

            <div className="s-card w-50 p-4 m-2 rounded d-flex flex-column justify-content-between" >
                <h2 className='fs-3 font-weight-bold'>{props.title}</h2>
                <a href={props.href} className='text-decoration-none'>
                    {props.mininfo}
                </a>
            </div>
            
        </>
    )
}