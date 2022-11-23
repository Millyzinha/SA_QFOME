import React, { useState } from 'react'
import { FaUserAlt, FaCartPlus, FaBars, FaTimes } from 'react-icons/fa'
import Logo from "./logo.png"
import './header.css'
// import { MdCalculate } from "react-icons/md"
import { IoMdCart } from "react-icons/io"
// import $ from 'jquery'
// import { GiCupcake } from "react-icons/gi"


import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';



function Header() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    // const [nav, setNav] = useState(false)
    // const handleNav = () => setNav(!nav)

    return (

        <div className='navbar2'>
          
          <>
      <IconContext.Provider value={{ color: '#ED7E07' }}>
        <div className='navbar'>
          <Link className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  

        
            {/* <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars onClick={handleNav} className='icon' />) : (<FaTimes className='icon' />)}
            </div> */}


            <div className='logo'>
                <img src={Logo} alt="LogoCircular" className='h-logo' />
            </div>
            <div className='direita'>
                < FaUserAlt className='user' onClick={() => window.location.href = `/perfil/2`} />
                < IoMdCart className='carrinho' onClick={() => window.location.href = `/carrinho/1`} />

            </div>
        </div>
    )
}

export default Header