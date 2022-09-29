import React from 'react'
import { FaBars, FaUserAlt, FaCartPlus } from 'react-icons/fa'
import './header.css'
import Logo from '../Header/logo2.png'

const Header = () => {
   

    return (

        
        <div className='navbar2'>
            <div className='esquerda'>
                <FaBars className='menu'/>
                
                
                    </div>
                    <div className='logo'>
                    <img src={Logo} alt="LogoCircular" className='h-logo'/>
                </div>
                <div className='direita'>
                < FaUserAlt className='user' />
                < FaCartPlus className='carrinho' />
                </div>
                </div> 
    )
}    

export default Header