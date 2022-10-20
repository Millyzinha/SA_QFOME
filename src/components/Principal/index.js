import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Carousel from "../Carrossel/carrossel.js"

const Home = () => {


    return (

<div className='body' > 
    <Header />

    <Carousel/>
    <div className='divMid'>
        <p>Comentários</p>
        <p>Comentários</p>
        <p>Comentários</p>
        <p>Comentários</p>
    </div>

    <Footer />
    </div>
        
    )
}    

export default Home