import React from 'react'
import {Carousel} from 'react-bootstrap'
import './carrossel.css'


const HeroSlider =() => {
    return(
        <>
        
    <Carousel>
      {/* natal */}
      <Carousel.Item interval={3000}>
      <img src={require('./1.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

 {/* ano novo */}
 <Carousel.Item interval={3000}>
      <img src={require('./2.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

          {/* 1 */}
      {/* <Carousel.Item interval={3000}>
      <img src={require('./CHOCO.png')} alt="alura" className='Foto1' />
      </Carousel.Item> */}
         
          {/* 2 */}
      <Carousel.Item interval={3000}>
        <img src={require('./4.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

      
         {/* 3 */}
         {/* <Carousel.Item interval={3000}>
        <img src={require('./LASANHA .png')} alt="alura" className='Foto1' />
     
      </Carousel.Item> */}

       {/* imagem promo */}
       <Carousel.Item interval={3000}>
        <img src={require('./5.png')} alt="alura" className='Foto1' />
     
      </Carousel.Item>

     {/* 4 */}
      {/* <Carousel.Item interval={3000}>
        <img src={require('./saladas.png')} alt="alura" className='Foto1' />
      
      </Carousel.Item> */}

      {/* 5 */}
      <Carousel.Item interval={3000}>
        <img src={require('./3.png')} alt="alura" className='Foto1' />
      </Carousel.Item>

      {/* 6 */}
 {/* <Carousel.Item interval={3000}>
        <img src={require('./coxinha.png')} alt="alura" className='Foto1' />
      </Carousel.Item> */}

      
      {/* <Carousel.Item interval={3000}>
        <img src={require('./bolinhos.png')} alt="alura" className='Foto1' />
      </Carousel.Item> */}

  {/* 6 */}
  {/* <Carousel.Item interval={3000}>
        <img src={require('./camarao.png')} alt="alura" className='Foto1' />
      </Carousel.Item> */}

    </Carousel>
        </>
    )
}

export default HeroSlider