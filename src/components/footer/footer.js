import React from 'react'
import { SiPug } from 'react-icons/si'
import { } from "react-icons"
import { FiMail, FiFacebook,FiInstagram } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
//import {GrRestaurant} from 'react-icons/gr'
//import { Link } from 'react-scroll'
import '../footer/footerStyles.css'

const Footer = () => {
    return (
<div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="TituloQfome">
                        <h2></h2>
                    </div>
                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Informações</h3>
                        <p>Formas de Pagamento</p>
                        <p>Comunicados</p>
                        <p>Quem Somos</p>
                    </div>
                    <div className="col">
                        <h3>Qfome</h3>
                        <p>Doces</p>
                        <p>Salgados</p>
                        <p>Jantar</p>
                        <p>Eventos</p>
                        <p>Almoço</p>
                    </div>
                    <div className="col">
                        <h3>Equipe</h3>
                        <p>Daiana</p>
                        <p>Kamilly</p>
                        <p>Luis</p>
                        <p>Marcyelen</p>
                    </div>
                    <form>
                        <h3>Redes sociais</h3>
                        {/* //<input type="whatsapp" placeholder='Tire suas dúvidas' />
                        <IoLogoWhatsapp className='social-icon' /> */}
                        <div className="social-group">
                            <div>
                            <FiInstagram className='social-icon' />
                            <h4 className='redessociais'>Instagram</h4>
                            </div>
                            <div>
                            <FiFacebook className='social-icon' />
                            <h4 className='redessociais' >Facebook</h4>
                            </div>
                            <div>
                            <IoLogoWhatsapp className='social-icon' />
                            <h4 className='redessociais' >Whatsapp</h4>
                            </div>
                            <div>
                            <FiMail className='mail-icon' />
                            <h4 className='redessociais' >E-Mail</h4>
                            </div>
                            
                            
                           
                           
                          
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer 