import React from 'react'
import Menu from '../Indexhome/menu'
import '../QuemSomos/QuemSomos.css'
import { RiSuitcaseFill } from 'react-icons/ri'
import { RiTeamFill } from 'react-icons/ri'


const QuemSomos = () => {
    return (
        <div className='container'>
            <div className='title'>

                <h1>Quem Somos</h1>
            </div>
            <div className='dad-icons'>
                <div>
                    <RiSuitcaseFill className='icon-qsomos' />
                    <h2>Empresa</h2>
                    <p>Qfome é um site criado para oferecer refeições de qualidades para as pessoas em seus eventos
                        facilitando nas formas de pesquisas, qualidades e ótimos preços, com o intuito de servir
                        ótimos pratos</p>
                </div>
                <div>
                    <RiTeamFill className='icon-equipe' />
                    <h2>Equipe</h2>
                    <p>Somos um grupo com quatro colegas......</p>
                </div>
            </div>
            {/* <Menu/> */}
        </div>
    )
}

export default QuemSomos