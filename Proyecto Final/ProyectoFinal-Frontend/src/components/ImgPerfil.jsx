import Figure from 'react-bootstrap/Figure';

export default function ImgPerfil(props){
    return(
        <Figure>
              <Figure.Image
                width={50}
                height={50}
                alt='Imagen de usuario'
                src={props.fuente}
                className='shadow-sm ' roundedCircle />
            </Figure>
        )
}