import React from 'react'
import Menu from '../Indexhome/menu'
import { FaBars, FaUserAlt, FaCartPlus } from 'react-icons/fa'
import './header.css'
import Logo from './logo2.png'

const Header = () => {
   

    return (

        
        <div className='navbar'>
            <div className='esquerda'>
                <FaBars className='menu'/>
                <h1 className='title'></h1>
                
                    </div>
                    <div className='logo'>
                    <img src={Logo} className='h-logo'/>
                </div>
                <div className='direita'>
                < FaUserAlt className='user' />
                < FaCartPlus className='carrinho' />
                </div>
                </div>
                
                
              
            
                
        
    )
}    

export default Header