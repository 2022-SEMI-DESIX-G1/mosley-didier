import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import InfoSection from './InfoSection';
import icono from '../icons/talking.png';
import cell from '../icons/cell.png';
import chat from '../icons/chat.png';
import seller from '../icons/seller.png';
export default function Sections(){
    return(
        <>
            <Container>
                <section className='carrusel d-flex flex-column align-items-center m-5'>
                    <h1 className=''>Si no estás en internet, tu negocio no existe</h1>
                    <Carousel className='rounded'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://katekismo.com/wp-content/uploads/2017/05/Editar-videos-online-800x400.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Proyectate</h3>
                                <p>¡Haz que todo te conozcan en la red!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://katekismo.com/wp-content/uploads/2018/01/Programas-para-hacer-videos-800x400.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Explota tu talento</h3>
                                <p>Encargate de ir mejorando cada día, valoramos bastante la calidad del servicio.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_800,h_400/https://knowledgemerger.com/wp-content/uploads/2019/06/How-do-online-gamers-make-money-800x400.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Sal de tu zona de confort</h3>
                                <p>
                                    Atrevete a hacer los mejores proyectos en demanda ¡ahora! 
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </section>
            </Container>
            {/* Svg de arriba */}
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 84.78468899521536,111.09569377990431 169.56937799043072,89.19138755980862 258,89 C 346.4306220095693,88.80861244019138 438.50717703349267,110.33014354066984 525,129 C 611.4928229665073,147.66985645933016 692.4019138755982,163.48803827751198 812,151 C 931.5980861244018,138.51196172248802 1089.8851674641148,97.71770334928229 1201,90 C 1312.1148325358852,82.28229665071771 1376.0574162679427,107.64114832535886 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ff690088" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,266 0,266 C 100.87081339712918,284.47846889952154 201.74162679425837,302.95693779904303 299,306 C 396.25837320574163,309.04306220095697 489.9043062200958,296.6507177033493 576,271 C 662.0956937799042,245.3492822966507 740.6411483253588,206.44019138755976 837,217 C 933.3588516746412,227.55980861244024 1047.531100478469,287.5885167464115 1151,304 C 1254.468899521531,320.4114832535885 1347.2344497607655,293.20574162679424 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ff6900ff" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            </div>
            <div className='gr-bg' id='s1'>
                <Container>
                    <InfoSection
                        orden='flex-row-reverse'
                        colorT='text-light'
                        icono={icono}
                        titulo='Factura desde tu casa'
                        info='Aprovecha nuestras herramientas virtuales para que le saques aprtido a tu talento' />
                </Container>
            </div>
            {/* Svg de abajo */}
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,166 0,166 C 147.85714285714283,197.03571428571428 295.71428571428567,228.07142857142858 414,215 C 532.2857142857143,201.92857142857142 621,144.75 722,132 C 823,119.25 936.2857142857144,150.92857142857142 1058,164 C 1179.7142857142856,177.07142857142858 1309.8571428571427,171.53571428571428 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#eb144c88" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><path d="M 0,500 C 0,500 0,333 0,333 C 118.92857142857142,354.82142857142856 237.85714285714283,376.64285714285717 354,381 C 470.14285714285717,385.35714285714283 583.5,372.25 711,364 C 838.5,355.75 980.1428571428571,352.35714285714283 1104,348 C 1227.857142857143,343.64285714285717 1333.9285714285716,338.32142857142856 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#eb144cff" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path></svg>
            </div>

            <section id='s2'>
                <Container>
                    <div className='camarones'>
                        <InfoSection
                            orden=''
                            colorT='text-dark'
                            icono={cell}
                            titulo='Camaroncitos para todos'
                            info='Explora nuestra plataforma para encontrar las ofertas de trabajo por honorario.'
                        />
                    </div>

                </Container>
            </section>

            <section id='s3'>
                <Container>
                    <InfoSection
                        orden='flex-row-reverse'
                        colorT='text-dark'
                        icono={chat}
                        titulo='Recomienda el app y obten beneficios'
                        info='Valoramos la fidelidad y por eso queremos premiar a los que compartan la plataforma con sus amigos.'
                    />
                </Container>
            </section>

            <section id='s4'>
                <Container>
                    <InfoSection
                        orden=''
                        colorT='text-dark'
                        icono={seller}
                        titulo='Vende tus servicios'
                        info='No importa la profesión que tengas, puedes ofrecer tus servicios y productos en un solo lugar, generando ingresos directos a tu cuenta bancaria.'
                    />
                </Container>
            </section>
        </>
    )
}