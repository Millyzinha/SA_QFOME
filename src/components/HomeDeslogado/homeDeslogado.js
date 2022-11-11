import React from 'react'
import Footer from '../Footer/footer'
import "./homeDeslogado.css"
import Logo from "../Header/logo.png"
import { Link } from "react-router-dom"
const HOMEDeslogado = () => {


    
    return (
    <div className='principal'>
        <div className="header">

            <div className='novidadeslink' >
        <ul>
     <Link className='novidades' to={'/novidades'}> Novidades </Link>
     <Link className='logar' to={'/login'}> Cadastrar </Link>
     <Link className='cadastrar' to={'/cadastro'}> Logar </Link>
        </ul>

            </div>

        <div className='logo'>
                    <img src={Logo} alt="LogoCircular" className='h-logo'/>
                </div>


        </div>
        <div className='footerdiv'>
            < Footer />
            </div>
            </div>
               
    )
}    


export default HOMEDeslogado 
