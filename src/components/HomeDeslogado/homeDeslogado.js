import React from 'react'
import Footer from '../Footer/footer'
import "../HomeDeslogado/homeDeslogado.css"
import Logo from "../Header/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const HOMEDeslogado = () => {

    return (
    <div className='principal'>
        <div className="header">
            <div className='nAVlinkESQUERDA' >
            <Navbar>
          <Nav className="me-auto"  >
            <Nav.Link className='novidades' href="/novidades">NOVIDADES</Nav.Link>
          </Nav>
      </Navbar> 
            </div>
        <div className='logo'>
                    <img src={Logo} alt="LogoCircular" className='h-logo'/>
                </div>
<div className='navlinkdireita'>
    <Nav>
    <Nav.Link className='logar' href="/login">LOGAR</Nav.Link>
    <Nav.Link className='cadastrar' href="/cadastro">CADASTRAR</Nav.Link>
    </Nav>
</div>
        </div>
        <div className='footerdiv'>
            < Footer />
            </div>
            </div>   
    )
}    
export default HOMEDeslogado 
