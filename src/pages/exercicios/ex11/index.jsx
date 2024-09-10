import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'
import Texto from '../../../components/texto'

export default function Tabuada() {

    const [numero, setNumero] = useState(0)
    const [resultado, setResultado] = useState([])

    function calculoTabuada() {

        let result = ''
        let tabuada = []

        for (let i = 1; i < 11; i++) {

            result = `${numero} X ${i} = ${numero * i}`

            tabuada.push(result)
        }

        setResultado(tabuada)
        setNumero(0)
        

    }


    return (
        <div className='pagina-ex11 pagina'>
            <Cabecalho/>

            <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 11 - Tabuada'
            color = '#6533B7'
            />
           
          

            <Texto
            
            p = {`Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.`}

            />

            <section className='ex'>

                <div className='card'>
                <h2>Tabuada do:</h2>
                <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />

                <div>
                <button onClick={calculoTabuada}>Executar</button>
                </div>
                
                </div>

               <div className='final'>
                
                {resultado.map((i, pos) =>
                 <h3 key={pos}>
                    {i}
                 </h3>
                
                )}
               
               </div>
                

                
            </section>
        </div>
    )
}