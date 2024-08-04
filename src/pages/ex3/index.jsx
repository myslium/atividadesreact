import './index.scss'

import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function TotalQtd() {

    const [pequeno, setPequeno] = useState(0)
    const [medio, setMedio] = useState(0)
    const [grande, setGrande] = useState(0)
    const [resultado, setResultado] = useState(0)

    function total() {

        setResultado(((pequeno * 13.50) + (medio * 15.00) + (grande * 17.50)).toFixed(2))
        setGrande(0)
        setMedio(0)
        setPequeno(0)
    }


    return (
        <div className='pagina-ex3'>
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
                
                <h1>Exercício 03 - Valor total por quantidade</h1>

                
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b>
                <br />sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    
                    <div className='acai'>
                        
                        <div className='qtd'>
                            <h2>Quantidade pequeno</h2>
                            <input type='text' value={pequeno} onChange={e => setPequeno(e.target.value)}/>
                        </div>
                        <div className='qtd'>
                            <h2>Quantidade médio</h2>
                            <input type='text' value={medio} onChange={e => setMedio(e.target.value)}/>
                        </div>
                        <div className='qtd'>
                            <h2>Quantidade grande</h2>
                            <input type='text' value={grande} onChange={e => setGrande(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={total}>Executar</button>
                </div>

                <h3>Resultado: O total é R$ {resultado}</h3>
            </section>

          
        </div>
    )
}