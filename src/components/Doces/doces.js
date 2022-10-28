import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import Card from './CARDSDOCES/index'
import "./Doces.css"

import imagem1 from "./imagens/mousse-de-maracuja.jpg"
import imagem2 from "./imagens/mousse-de-limao.jpg"
import imagem3 from "./imagens/mousseChoco.jpg"
import imagem4 from "./imagens/brigadeiroBeijinho.jpg"
import imagem5 from "./imagens/ninho.jpg"
import imagem6 from "./imagens/docinhoDiverso.jpg"
import imagem7 from "./imagens/morango.jpg"
import imagem8 from "./imagens/moussemorango.jpg"
import imagem9 from "./imagens/docemorango.jpg"
import imagem10 from "./imagens/sagu.jpg"
import imagem11 from "./imagens/arrozdoce.jpg"
import imagem12 from "./imagens/pudim.jpg"

const Doces = () => {
    const cards_doce = [
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: 7.59,
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'Latte',
            description:
                'Uma dose de café expresso com o dobro de leite ',
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'Capuccino',
            description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'Macchiato',
            description:
                'Café expresso misturado com um pouco de leite quente e espuma',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },


    ]
    return (
        <div>
            <h2>Doces</h2>
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

export default Doces

