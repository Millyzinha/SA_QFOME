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
            name: 'MOUSSE DE MARACUJÁ',
            description: 'Mousse de maracujá natural, contém sementes e  uma textura deliciosa.',
            price: 7.59,
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'MOUSSE DE LIMÃO',
            description: 'Mousse de limão com um gosto mais azedinho, perfeito para sua tarde.',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'MOUSSE DE CHOCOLATE',
            description: '  Mousse de chocolate com chantilly acomanhado de calda de chocolate',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'BRIGADEIRO E BEIJINHO',
            description: 'Brigadeiro cremoso com granulados de chocolate e beijinhos com côco ralado',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'BRIGADEIRO LEITE NINHO',
            description: 'Brigadeiro feito com leite ninho e uma deliciosa calda de chocolate.',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'BRIGADEIROS',
            description:
                'Brigadeiros sortidos, contém todos os sabores, se surpreenda ao comprar',
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'MORANGO DE CHOCOLATE',
            description:
                'Morangos frescos acompanhados de calda de chocolate, cada um vem no espetinho.',
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'SORVETE DE MORANGO',
            description:
                'Sorvete de morango natural, acompanhados de pequenos pedaços de fruta de morango',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'TORTA DE MORANGO',
            description: 'Torta de morango com recheio de chocolate, chantilly e frutas de morango.',
            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],
            name: 'SAGU DE VINHO',
            description: 'Sagu de vinho com calda cremosa acompanhado de creme e chantilly',
            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],
            name: 'ARROZ DOCE',
            description: 'Arroz doce com canela, uma deliciosa refeição para seu dia.',
            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Pudim tradicional cremoso, experimente para uma sobremesa.',
            price: 12.29,
        },


    ]
    return (
        <div>
        
            <Header className="header" />

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

