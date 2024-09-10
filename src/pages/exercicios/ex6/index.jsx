import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'
import Texto from '../../../components/texto'

export default function SalarioLiquido() {

    const [base, setBase] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [resultado, setResultado] = useState(0)

    function salarioliq () {
        setResultado((base - (porcentagem * base)/100)- desconto)

        setBase(0)
        setPorcentagem(0)
        setDesconto(0)
    }
    


    return (
        <div className='pagina-ex6 pagina'>
           <Cabecalho/>

           <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 06 - Sálario líquido'
            color = '#FF5B37'
            />

            <Texto
            
            p = {`Implementar um programa em Javascript para calcular o salário líquido de um empregado, baseado no salário base, o bônus mensal e o desconto`}
            
            />

            <section className='ex'>

                <div className='card'>
                    
                    <div className='pai'>
                        
                        <div className='filho'>
                            <h2>Salário base:</h2>
                            <input type='text' value={base} onChange={e => setBase(e.target.value)}/>
                        </div>
                        <div className='filho'>
                            <h2>Bônus mensal%:</h2>
                            <input type='text' value={porcentagem} onChange={e => setPorcentagem(e.target.value)}/>
                        </div>
                        <div className='filho'>
                            <h2>DescontoR$:</h2>
                            <input type='text' value={desconto} onChange={e => setDesconto(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={salarioliq}>Executar</button>
                </div>


                
                <h3>O seu salário líquido é de R${resultado}</h3>

                
            </section>

          
        </div>
    )
}