import React from 'react'
import {Carousel} from 'react-bootstrap'
import './carrosselQS.css'


const HeroSlider =() => {
    return(
        <>
        
    <Carousel>
          {/* 1 */}
      <Carousel.Item interval={3000}>
      <img src={require('./marcy.png')} alt="alura" className='Foto1' />
      </Carousel.Item>
      
          {/* 2 */}
      <Carousel.Item interval={3000}>
        <img src={require('./kamy.png')} alt="alura" className='Foto1' />
        
      </Carousel.Item>

         {/* 3 */}

         <Carousel.Item interval={3000}>
        <img src={require('./dai.png')} alt="alura" className='Foto1' />
     
      </Carousel.Item>

    
    </Carousel>




        </>
    )
}

export default HeroSlider