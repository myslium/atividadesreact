import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'
import Texto from '../../../components/texto'


export default function Media() {

    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [media, setMedia] = useState(0)
    const [resultado, setResultado] = useState(false)

    function mediaFinal() {
        let calculo = (Number(nota1) + Number(nota2) + Number(nota3) ) / 3;
        
        let final = calculo>=6

        setResultado(final)
        setNota1(0)
        setNota2(0)
        setNota3(0)
        setMedia(calculo)

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

            <Texto
            
            p = {`Implementar um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.`}            
            />
            
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


                <div className='final'>
                <h3>{media}</h3>
                <h3>O aluno passou?:{resultado ? "True" : "False"}</h3>

                </div>
            </section>

          
        </div>
    )
}