import React from 'react'
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}> Home</Link></li>
                <li><Link to= "/Doces">Doces</Link></li>
                <li><Link to= "/Salgados">Salgados</Link></li>
                <li><Link to= "/Almoco">Almoço</Link></li>
                <li><Link to= "/Jantar">Jantar</Link></li>
                <li><Link to= "/Eventos">Eventos</Link></li>
                <li><Link to= "/Comunicados">Comunicados</Link></li>
                <li><Link to= "/QuemSomos">Quem Somos</Link></li>
            </ul>
        </nav>
    )
}

export default Menu