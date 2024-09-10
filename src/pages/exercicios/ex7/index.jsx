import './index.scss'

import Cabecalho from '../../../components/cabecalho'
import NomeExercicio from '../../../components/nomeEx'
import { useState } from 'react'
import Texto from '../../../components/texto'

export default function CoresPrimarias() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resultado, setResultado] = useState(false)

    function cores () {

        if ((cor1 === 'Azul' && cor2 === 'Amarelo' || cor1 === 'Amarelo' && cor2 === 'Azul')) {
            setResultado(true)
        } 
        else if ((cor1 === 'azul' && cor2 === 'vermelho' || cor1 === 'vermelho' && cor2 === 'azul')) {
            setResultado(true)
        } 
        else if ((cor1 === 'Vermelho' && cor2 === 'Azul' || cor1 === 'Azul' && cor2 === 'Vermelho')) {    
            setResultado(true)
        
        }
        else if ((cor1 === 'vermelho' && cor2 === 'amarelo' || cor1 === 'amarelo' && cor2 === 'vermelho')) {
            setResultado(true)
        
        }
        else if ((cor1 === 'Vermelho' && cor2 === 'Amarelo' || cor1 === 'Amarelo' && cor2 === 'Vermelho')) {
            setResultado(true)

        }
        else if ((cor1 === 'vermelho' && cor2 === 'azul' || cor1 === 'azul' && cor2 === 'vermelho')) {
            setResultado(true)

        }
        else {
            setResultado(false)
        }

        setCor1('')
        setCor2('')
    }

    
    return (
        <div className='pagina-ex7 pagina'>
            <Cabecalho/>

            <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 07 - Cores Primárias'
            color = '#37FFAB'
            />
           

            <Texto
            
            p = {`Implementar um programa em javascript para verificar se duas cores são primárias`}
            
            />
            <section className='ex'>

                <div className='card'>
                <h2>Cor 1</h2>
                <input type="text" value={cor1} onChange={e => setCor1(e.target.value)}/>
                <h2>Cor 2</h2>
                <input type="text" value={cor2} onChange={e => setCor2(e.target.value)}/>

                <div>
                <button onClick={cores}>Executar</button>
                </div>
                

                </div>

                <div className='final'>
                <h3>As duas cores são primárias? {resultado ? 'True' : 'False'} </h3>
                 </div>
               

                
            </section>
            
        </div>
    )
}


