import React from 'react'
import { RiSuitcaseFill } from 'react-icons/ri'
import Carousel from "../CarrosselQS/carrosselQS.js"
import { RiTeamFill } from 'react-icons/ri'
import './quemSomos.css' 
import Header from '../Header/header.js'
import Footer from '../Footer/footer.js'



const QuemSomos = () => {
    return (
     
        <>
            <Header/>

            <Carousel/>
            <div className='dad-icons'>
                <div>
                    <RiSuitcaseFill className='icon-qsomos' />
                    <h2 className='h2-empresa'>Empresa</h2>
                    <p className='mini-texto'>Qfome é um site criado para oferecer refeições de qualidades para as pessoas em seus eventos
                        facilitando nas formas de pesquisas, qualidades e ótimos preços, com o intuito de servir
                        ótimos pratos</p>
                </div>
                <div>
                    <RiTeamFill className='icon-equipe' />
                    <h2 className='h2-equipe'>Equipe</h2>
                    <p className='texto-equipe'>Somos um grupo com quatro colegas......</p>
                </div>
            </div>
          <Footer/>
       </>
    )
}

export default QuemSomos