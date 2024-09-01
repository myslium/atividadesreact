import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'


export default function Media() {

    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [resultado, setResultado] = useState(false)

    function mediaFinal() {
        let calculo = ((Number(nota1.replaceAll(',' , '.')) + Number(nota2.replaceAll(',' , '.')) + Number(nota3.replaceAll(',' , '.'))) / 3).toFixed(2)
        
        let final = calculo>=6

        setResultado(final)
        setNota1(0)
        setNota2(0)
        setNota3(0)

    }


    return (
        <div className='pagina-ex5 pagina'>
          
          <Cabecalho/>
           
          <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 05 - Média de notas'
            color = '#CB37FF'
            />

            <section className='quadro'>
                <p>Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    
                    <div className='notas'>
                        
                        <div className='nota'>
                            <h2>Nota 1:</h2>
                            <input type='text' value={nota1} onChange={e => setNota1(e.target.value)}/>
                        </div>
                        <div className='nota'>
                            <h2>Nota 2:</h2>
                            <input type='text' value={nota2} onChange={e => setNota2(e.target.value)}/>
                        </div>
                        <div className='nota'>
                            <h2>Nota 3:</h2>
                            <input type='text' value={nota3} onChange={e => setNota3(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={mediaFinal}>Executar</button>
                </div>


                <div>
                <h3>O aluno passou?:{resultado ? "True" : "False"}</h3>

                </div>
            </section>

          
        </div>
    )
}