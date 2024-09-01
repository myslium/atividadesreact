import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'


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
        <div className='pagina-ex3 pagina'>
           
           <Cabecalho/>

           <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 03 - Valor total por quantidade'
            color = '#37FFF3'
            />

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