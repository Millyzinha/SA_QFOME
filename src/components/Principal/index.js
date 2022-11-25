import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Carousel from "../Carrossel/carrossel.js"
import Card from "./Card";

import image1_prom from "./images/coxinha_promocao.webp"
import image4_prom from "./images/HAMBUGER2.jpg"
import image5_prom from "./images/MOUSSE.jpg"
import image6_prom from "./images/BRIGADEIRO.jpg"
import image7_prom from "./images/macarrao.jpg"
import image8_prom from "./images/cupcakeee.jpg"


// import image3 from '../assets/image3.jpg'

const Principal = () => {
    const cards_prom = [
        {
          id: 1,
          title: "COXINHA DE FRANGO",
          image: image1_prom,
          preco: "10 UNIDADES POR 05,00",
          url: "http://localhost:3000/salgados",
        },
        {
            id: 2,
            title: "MOUSSE DE MARACUJÁ",
            image: image5_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "http://localhost:3000/doces",
          },
          {
            id: 3,
            title: "X-PERNIL-FRIMESA",
            image: image4_prom,
            preco: "3 UNIDADES POR 20,00",
            url: "http://localhost:3000/especiais",
          },
          {
            id: 4,
            title: "BRIGADEIRO GOURMET",
            image: image6_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "http://localhost:3000/doces",
          },
          {
            id: 5,
            title: "MACARRÃO",
            image: image7_prom,
            preco: "05,00 O KILO",
            url: "http://localhost:3000/jantar",
          },
          {
            id: 6,
            title: "CUPCAKE DE CHOCOLATE",
            image: image8_prom,
            preco: "10 UNIDADES POR 05,00",
            url: "http://localhost:3000/doces",
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

export default Principal