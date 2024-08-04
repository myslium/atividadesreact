import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Cupom() {

    const [pedido, setPedido] = useState(0)
    const [cupom, setCupom] = useState(0)
    const [total, setTotal] = useState(0)

    function calculo () {
        setTotal(pedido.replaceAll(',','.') - cupom)
        setCupom(0)
        setPedido(0)
    }

    return (
        <div className='pagina-ex1'>
             <header>
                <img src="/assets/images/logofrei.png" alt="" />

                <h1>React FreiS</h1>
                <nav>
                <Link to = '/'><h2>Início</h2></Link>
                <Link to = '/sobre'><h2>Sobre</h2></Link>
                </nav>
            </header>

            <section className='titulo'>
                <Link to = '/'>
                <img src="/assets/images/voltar.png" alt="" />
                </Link>
                
                <h1>Exercício 01 - Cupom de desconto</h1>

                
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto.<b>O cupom diz quantos reais terá </b> 
                <br />de desconto.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                <h2>Informe o valor do pedido</h2>
                <input type="text" value={pedido} onChange={e => setPedido(e.target.value)}/>
                <h2>Informe o valor do cupom</h2>
                <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />

                <div>
                <button onClick={calculo} >Executar</button>
                </div>
                

                </div>
                <h3>Resultado: o total é R$ {total} </h3>
            </section>
            
        </div>
    )
}