import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../Carrossel/carrossel.css'


const HeroSlider =() => {
    return(
        <>
        
    <Carousel>
          {/* 1 */}
      <Carousel.Item interval={3000}>
      <img src={require('./CHOCO.png')} alt="alura" className='Foto1' />
      </Carousel.Item>
      
          {/* 2 */}
      <Carousel.Item interval={3000}>
        <img src={require('./FEIJOADA .png')} alt="alura" className='Foto1' />
        
      </Carousel.Item>

         {/* 3 */}

         <Carousel.Item interval={3000}>
        <img src={require('./LASANHA .png')} alt="alura" className='Foto1' />
     
      </Carousel.Item>

     {/* 4 */}
      <Carousel.Item interval={3000}>
        <img src={require('./saladas.png')} alt="alura" className='Foto1' />
      
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item interval={3000}>
        <img src={require('./PUDIM.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

      {/* 6 */}
 <Carousel.Item interval={3000}>
        <img src={require('./coxinha.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item interval={3000}>
        <img src={require('./bolinhos.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

  {/* 6 */}
  <Carousel.Item interval={3000}>
        <img src={require('./camarao.png')} alt="alura" className='Foto1' />
      </Carousel.Item>
    </Carousel>




        </>
    )
}

export default HeroSlider