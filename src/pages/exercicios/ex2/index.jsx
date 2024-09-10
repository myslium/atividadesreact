import './index.scss'


import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'
import Texto from '../../../components/texto'


export default function Conversao() {

    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState(0)


    function converter () {
        
        setResultado(gramas.replaceAll(',','.') * 1000)
    }

    return (
        <div className='pagina-ex2 pagina'>
            <Cabecalho/>

            <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 02 - Converter Kg/gramas'
            color = '#B3FF37'
            />
           
          

           <Texto
            p = {`Implementar um programa em Javascript para converter kilos em gramas.`}

           />

            <section className='ex'>

                <div className='card'>
                <h2>Valor em kilogramas</h2>
                <input type="text" value={gramas} onChange={e => setGramas(e.target.value)}/>

                <div>
                <button onClick={converter} >Executar</button>
                </div>
                
                </div>

               
                <div className='end'>
                <h3>Resultado: o total é {resultado} gramas</h3>
                </div>
               

                
            </section>
        </div>
    )
}