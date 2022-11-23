import React from 'react'
import "./SucessoCompra/sucesso"
import Footer from '../Footer/footer'
import Header from '../Header/header'
import "../Carrinho/carrinho.css"

function adicionarCarinho() {
  alert ('comprando')
}


const CarrinhoCheckout = () => {
    return (
        <div>
            <Header />

      
            <Footer />

        </div>
    )
}
export default CarrinhoCheckout
