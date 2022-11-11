import React from 'react'
import Footer from '../Footer/footer'
import "./homeDeslogado.css"
import Logo from "../Header/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoHamburguer from "../HomeDeslogado/imagens/logohamb.png"


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













{/* GUSTAVO, MEXER SÓ NO QUE ESTA DENTRO DA DIV MEIO */}

{/* PARA ACESSAR A PAGINA: http://localhost:3000/HomeDeslogado */}








        <div className='meio'>

            <div className='divflex'>
        <div className='marklandingtext'>

            <h2 className='LandMARK'>Encontre a refeição perfeita </h2>
            <h2 className='LandMARK'>para qualquer hora do seu dia, </h2>
            <h2 className='LandMARKF'>cadastre-se na Qfome e faça Login!</h2>
</div>
<div className='buttons'>

<a
          href={  "/login"}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Logar
        </a>

        <a
          href={  "/cadastro"}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Cadastrar
        </a>

        </div>
        </div>
  
            <div className='hamb'>
                    <img src={LogoHamburguer} alt="LogoLANDING" className='LOGOHAMB'/>
                </div>
        </div>






{/* FIM DA DIV MEIO  */}






        <div className='footerdiv'>
            < Footer />
            </div>
            </div>   
    )
}    
export default HOMEDeslogado 
