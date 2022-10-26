import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import "./carrinho.css"

const Carrinho = () => {
    return (
        <div>
            <Header />

            <div className='compras'>
                <div className='total'>
                    <div class="conta">
                    </div>
                    <div class="finalizar-compra">
                        <div><button id="BuyCart">Comprar</button></div>
                        <div><button id="DeleteCart">Limpar Carrinho</button></div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

            </div>
    
   
    )


}

export default Carrinho