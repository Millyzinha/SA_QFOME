import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Carousel from "../Carrossel/carrossel.js"
import Card from "./Card";

import image1_prom from "../Principal/images/coxinha_promocao.webp"
import image4_prom from "../Principal/images/HAMBUGER2.jpg"
import image5_prom from "../Principal/images/MOUSSE.jpg"
import image6_prom from "../Principal/images/BRIGADEIRO.jpg"
import image7_prom from "../Principal/images/macarrao.jpg"

// import image3 from '../assets/image3.jpg'

const Home = () => {
    const cards_prom = [
        {
          id: 1,
          title: "COXINHA DE FRANGO",
          image: image1_prom,
          preco: "10 UNIDADES POR 05,00",
          url: "https://faztweb.com",
        },
        {
            id: 2,
            title: "MACARRONS SORTIDOS",
            image: image5_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "https://faztweb.com",
          },
          {
            id: 3,
            title: "X-PERNIL-FRIMESA",
            image: image4_prom,
            preco: "3 UNIDADES POR 20,00",
            url: "https://faztweb.com",
          },
          {
            id: 4,
            title: "BRIGADEIRO GOURMET",
            image: image6_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "https://faztweb.com",
          },
          {
            id: 5,
            title: "MACARRÃO",
            image: image7_prom,
            preco: "05,00 O KILO",
            url: "https://faztweb.com",
          },
          {
            id: 6,
            title: "Macarrons sortidos",
            image: image1_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "https://faztweb.com",
          },
       
      ];


    return (

<div className='body' > 
    <Header />

    <Carousel/>
    
        <p className='prom'>NOVIDADES DA SEMANA:</p>
  
    <div className="container d-flex h-100">
      <div className="row">
        {cards_prom.map(({ title, image, preco, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} preco={preco}url={url} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
        
    )
}    

export default Home