import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Carousel from "../Carrossel/carrossel.js"
import "./homeDeslogado.css"
import { Link } from "react-router-dom"

const HomeDeslogado = () => {


    return (

        <div className='body' >
            <Header />
            <Carousel />
            <div className='DivCadastroLogin'>
                <p className="link-cadastro">Não possui uma conta?<Link to='/Cadastro'>Cadastre-se</Link></p>

                <p className="link-login">Você já possui uma conta?< Link to='/Login'>Login</Link></p>
            </div>








            <Footer />
        </div >

    )
}

export default HomeDeslogado