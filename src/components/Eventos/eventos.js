import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import Card from './CARDSEVENTOS/index'
import "./eventos.css"


import imagem1 from "./imagensEventos/festa.jpg"
import imagem2 from "./imagensEventos/cria.jpg"
import imagem3 from "./imagensEventos/formatura.jpg"
import imagem4 from "./imagensEventos/casamentoo.jpg"
import imagem5 from "./imagensEventos/chatarde.jpg"
import imagem6 from "./imagensEventos/natal.jpg"
import imagem7 from "./imagensEventos/2023.jpg"
import imagem8 from "./imagensEventos/juninaa.jpg"
import imagem9 from "./imagensEventos/churrasco.jpg"



const Eventos = () => {
    const cards_doce = [
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'MOUSSE DE MARACUJÁ',
            description: 'O tradicional café feito com água quente e grãos moídos',
            Price: "R$ 7.59",
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'MOUSSE DE LIMÃO',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'MOUSSE DE CHOCOLATE',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'BRIGADEIRO E BEIJINHO',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'BRIGADEIRO DE LEITE NINHO',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'BRIGADEIROS',
            description:
                'SENSAÇÃO, NINHO, CHURROS E BEIJINHO',
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'MORANGO COM CHOCOLATE',
            description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'SORVETE DE MORANGO',
            description:
                'SORVETE NATURAL DE MORANGO',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'TORTA DE MORANGO',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 12.29,
        },
        // {
        //     id: '10',
        //     image: imagem10,
        //     type: ['especial', 'com leite'],
        //     name: 'SAGU DE VINHO',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },
        // {
        //     id: '11',
        //     image: imagem11,
        //     type: ['especial', 'com leite'],
        //     name: 'ARROZ DOCE',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },
        // {
        //     id: '12',
        //     image: imagem12,
        //     type: ['especial', 'com leite'],
        //     name: 'PUDIM',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },


    ]
    return (
        <div>

            <Header />
            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards_doce.map(({ image, id, name, description, price, type }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} price={price} id={id} name={name} description={description} type={type} />
                    </div>
                ))}
            </div>
        </div>


            <Footer />
        </div>
    )
}

export default Eventos