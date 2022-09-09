import React from 'react'
import { SiPug } from 'react-icons/si'
import { } from "react-icons"
import { FiMail, FiFacebook,FiInstagram } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
//import {GrRestaurant} from 'react-icons/gr'
//import { Link } from 'react-scroll'
import css from "./footerStyles.css"

const Footer = () => {
    return (
<div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiPug className='icon' />
                        <h2>Qfome</h2>
                    </div>
                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Feed</p>
                        <p>Perfil</p>
                    </div>
                    <div className="col">
                        <h3>Dados importantes</h3>
                        <p>Formas de Pagamento</p>
                        <p>Configurações</p>
                        <p>Comunicados</p>
                        <p>Quem Somos</p>
                    </div>
                    <div className="col">
                        <h3>Home</h3>
                        <p>Doces</p>
                        <p>Salgados</p>
                        <p>Jantar</p>
                        <p>Eventos</p>
                    </div>
                    <form>
                        <h3>Redes sociais</h3>
                        <input type="whatsapp" placeholder='Tire suas dúvidas' />
                        <IoLogoWhatsapp className='social-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <IoLogoWhatsapp className='social-icon' />
                            <FiMail className='mail-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer 