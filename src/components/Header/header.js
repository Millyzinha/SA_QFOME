import React, { useState } from 'react'
import { FaUserAlt, FaCartPlus, FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom"
import Logo from "../Header/logo.png"
import './header.css'



const Header = () => {


    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
    
            <div  className='navbar2'>
    
            <div className='esquerda'>
        
    <ul className={nav ? 'nav-menu active' : 'nav-menu'}>


     <Link className='home' to={'/'}> Home</Link>
     <Link className='doces' to= "/Doces">Doces</Link>
     <Link className='salgados' to= "/Salgados">Salgados</Link>
     <Link className='almoco' to= "/Refeicoes">Refeições</Link>
     <Link className='Bolo' to= "/Bolo">Bolo</Link>
     <Link className='Especias' to= "/Especias">Especias QFOME</Link>
     <Link className='eventos' to= "/Eventos">Eventos</Link>
     {/* <Link className='comunicados' to= "/Comunicados">Comunicados</Link> */}
     <Link className='qsomos' to= "/QuemSomos">Quem Somos</Link>
    </ul>

   
   
    <div className="hamburger" onClick={handleNav}>
        {!nav ? (<FaBars onClick={handleNav} className='icon' />) : (<FaTimes className='icon' />)}
    </div>
    </div>

           {/* <Location>
            <MapPin weight="fill" size={22} />
            Belo Horizonte, MG
           </Location> */}

                    <div className='logo'>
                    <img src={Logo} alt="LogoCircular" className='h-logo'/>
                </div>
                <div className='direita'>
                < FaUserAlt className='user' onClick={() => window.location.href = `/perfil/2`} />
                < FaCartPlus className='carrinho' onClick={() => window.location.href = `/carrinho/1`} />
                </div>
                </div>
    )
}    

export default Header