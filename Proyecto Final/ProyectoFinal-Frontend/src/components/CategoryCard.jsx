import Card from 'react-bootstrap/Card';

export default function CateogoryCard({cat}){
    return(
        <div 
        className='cat-cont rounded m-3' 
        style={{ background: `url(${cat.img})` }}
        >
            <div className='mini-cont d-flex align-items-center justify-content-center'>
                <span className='text-white font-weight-bold text-uppercase'>{cat.titulo}</span>
            </div>
        </div>
        )
}