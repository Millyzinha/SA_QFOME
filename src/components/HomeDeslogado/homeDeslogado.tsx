import React from 'react'
import Header from '../Header/header'
import Footer from  '../Footer/footer'
import Carousel from  "../Carrossel/carrossel"
import "./homeDeslogado.css"
import { Link } from "react-router-dom"
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import "./homeDeslogado.css"

import {
  // CoffeeCardContainer,
  CoffeeItem,
  // CoffeeSection,
  HomeContainer,
  IntroContainer,
  IntroContent,
  IntroGrid,
  PackageItem,
  ShoppingCartItem,
  TimerItem,
} from './styles'


const HomeDeslogado = () => {
    return (

        <div className='body' >
            <Header />
            <Carousel />
            
            <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <h1 className='grande'>
            Encontre a comida para qualquer hora do dia e evento
          </h1>
          <p className='subtitulo'>
            Com o Qfome Delivery você recebe sua comida onde estiver, a qualquer hora!
          </p>
          <IntroGrid>
            <ShoppingCartItem className='carinhoemoji'>
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </ShoppingCartItem>
            <PackageItem className='caixaembalagem'>
              <span>
                <Package weight="fill" />
              </span>              
              Embalagem mantém a comida intacta
            </PackageItem>
            <TimerItem className='entregarapida'>
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </TimerItem >
            <CoffeeItem className='cafezinho'>
              <span>
                <Coffee weight="fill" />
              </span>
              A comida chega fresquinho até você
            </CoffeeItem>
          </IntroGrid>
        </IntroContent>
      </IntroContainer>
    </HomeContainer>
    <div className='DivCadastroLogin'>
                <p className="link-cadastro">Não possui uma conta?<Link to='/Cadastro'>Cadastre-se</Link></p>
                <p className="link-login">Você já possui uma conta?< Link to='/Login'>Login</Link></p>
            </div>
           <Footer />
        </div >

    )
}

export default HomeDeslogado