<<<<<<< HEAD
import React from 'react'
import { FaBars, FaUserAlt, FaCartPlus } from 'react-icons/fa'
import './header.css'
import Logo from './logo2.png'

const Header = () => {


    return (


        <div className='navbar'>
            <div className='esquerda'>
                <FaBars className='menu' />
                <h1 className='title'>Doces</h1>

            </div>
            <div className='logo'>
                <img src={Logo} className='h-logo' />
            </div>
            <div className='direita'>
                < FaUserAlt className='user' />
                < FaCartPlus className='carrinho' />
            </div>
        </div>






    )
}

=======
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

>>>>>>> bf9ef1f7812dc00fd9ce043cdd29e2b58ad0c322
export default Header