import React from 'react'
import {TbFlag} from 'react-icons/tb'
import Carousel from "../CarrosselQS/carrosselQS.js"
import {BsCardText} from 'react-icons/bs'
import './quemSomos.css' 
import Header from '../Header/header.js'
import Footer from '../Footer/footer.js'



const QuemSomos = () => {
    return (
     
        <>
            <Header/>

            <Carousel/>
            <div className='dad-icons'>
                <div className="div-esquerda">
                    <TbFlag className='icon-qsomos'/>
                    <h2 className='h2-empresa'>Missão</h2>
                    <p className='mini-texto'>Qfome tem como missão oferecer refeições de qualidades para as pessoas em seus eventos
                        facilitando nas formas de pesquisas, tendo qualidades em nossos produtos com ótimos preços, com o intuito de servir,
                        pratos incríveis</p>
                </div>
                <div className="div-direita">
                    <BsCardText className='icon-balance' />
                    <h2 className='h2-valores'>Valores</h2>
                    <p className='texto-val'>Como valores temos como princípio a qualidade de nossos produtos, prezamos muito pela atenção em todos os detalhes
                     procurando sempre uma inovação, importante falar que trabalhamos para somar, temos paixão por nossos serviços
                    </p>
                    {/* <p className='texto-val'>Qualidade</p>
                    <p className='texto-val'>Sustentabilidade</p>
                    <p className='texto-val'>Atenção aos detalhes</p> */}
                              
                                
                                
                                                    
                </div>
            </div>
          <Footer/>
       </>
    )
}

export default QuemSomos