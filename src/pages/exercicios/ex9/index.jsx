import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'

export default function Sorveteria() {

    const [sorvete, setSorvete] = useState(0)
    const [resultado, setResultado] = useState(0)
   
    function calculo() {

        let calc = 0
        if (sorvete < 1000) {
            calc = (sorvete / 100) * 3.50
        }
        else {
            calc = (sorvete / 100) * 3.00
        }

        setResultado(calc.toFixed(2))
        setSorvete(0)
    }

    return (
        <div className='pagina-ex8 pagina'>
            <Cabecalho/>

            <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 09 - Sorveteria'
            color = '#D0D0D0'
            />
           
          

            <section className='quadro'>
                <p>Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                <h2>Sorveteria</h2>
                <input type="text" value={sorvete} onChange={e => setSorvete(e.target.value)} />

                <div>
                <button onClick={calculo}>Executar</button>
                </div>
                
                </div>

               <div className='final'>
                <h3>O total à pagar é R${resultado}</h3>
               </div>
                

                
            </section>
        </div>
    )
}