import Figure from 'react-bootstrap/Figure';
export default function InfoSection(props){
    return(
        <div className={'d-flex align-items-center justify-content-center '+ props.orden}>
            <div className={props.colorT + ' p-4'}>
                <h3 className='fs-1'>{props.titulo}</h3>
                <span>{props.info}</span>
            </div>
            <div className=''>
                <Figure>
                    <Figure.Image
                        width={300}
                        height={300}
                        alt='icono'
                        src={props.icono}
                    />
                </Figure>
            </div>
        </div>
    )
}