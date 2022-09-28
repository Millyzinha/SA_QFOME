import Carousel from 'react-bootstrap/Carousel';
import "./carouselselstyle.css"

function IndividualIntervalsExample() {
  return (
    <Carousel>
      {/* <Carousel.Item interval={500}>

        <img src={require('./chocolate.png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item> */}
      {/* 2 */}
      <Carousel.Item interval={3000}>

        <img src={require('./CHOCO.png')} alt="alura" className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>

      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item interval={3000}>

        <img src={require('./FEIJOADA .png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item >
      {/* 4 */}
      <Carousel.Item interval={3000}>

        <img src={require('./LASANHA .png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item interval={3000}>

        <img src={require('./PUDIM.png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      {/* 6 */}
      <Carousel.Item interval={3000}>

        <img src={require('./saladas.png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      {/* 7 */}
      <Carousel.Item interval={3000}>

        <img src={require('./ultima.png')} className='Foto1' />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;