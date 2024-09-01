import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'

export default function Temperatura() {

    const [temperatura, setTemperatura] = useState('')
    const [resultado, setResultado] = useState('')

    function febre() {

        if (temperatura >= 41) {
            setResultado('Hipertermia')
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            setResultado('Febre alta')
        }
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            setResultado('Febre')
        }
        else if (temperatura >= 36 && temperatura < 37.6) {
            setResultado('Normal')
        }
        else  {
            setResultado('Hipotermia')
        }
        
        setTemperatura('')
    }
   

    return (
        <div className='pagina-ex8 pagina'>
            <Cabecalho/>

            <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 08 - Temperatura'
            color = '#000'
            />
           
          

            <section className='quadro'>
                <p>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </section>

            <section className='ex'>

                <div className='card'>
                <h2>Temperatura</h2>
                <input type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)}/>

                <div>
                <button onClick={febre}>Executar</button>
                </div>
                
                </div>

               <div className='final'>
                <h3>A situação para a sua temperatura é {resultado}</h3>
               </div>
                

                
            </section>
        </div>
    )
}