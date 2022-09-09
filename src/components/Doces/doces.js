import React from 'react'
import { FaBars, FaUserAlt, FaCartPlus } from 'react-icons/fa'
import '../Doces/Doces.css'
import Logo from '../Doces/logo2.png'

const Doces = () => {
   

    return (

        
        <div className='navbar'>
            <div className='esquerda'>
                <FaBars className='menu'/>
                <h1 className='title'>Doces</h1>
                
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

export default Doces