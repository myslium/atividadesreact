import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'


export default function Imc() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [situacao, setSituacao] = useState([])
    const [alterando, setAlterando] = useState(-1)
    const [result, setResult] = useState('')

   
    function calcImc() {

        if (peso !== 0 && altura !== 0 ) {

            let imc = (peso / (altura**2))
            let resultado = ''
            if (imc >= 40) {
                resultado = 'Obesidade grau III'
            }
            else if (imc >= 35 && imc < 39.9) {
               resultado ='Obesidade grau II'
            }
            else if (imc >= 30 && imc < 34.9) {
                resultado ='Obesidade grau I'
            }
            else if (imc >= 25 && imc < 29.9) {
                resultado = 'Sobrepeso'
            }
            else if (imc >= 18.5 && imc < 24.9) {
                resultado = 'Normal'
            }
            else {
                resultado = 'Abaixo do peso'
            }

            setResult(resultado)
    
            let resultadosImc = {
                pesoPessoa: peso,
                alturaPessoa: altura,
                situacao: resultado
            }


            if (alterando === -1) {

                setSituacao([...situacao, resultadosImc])
        
                setAltura(0)
                setPeso(0)
    

            }

            else {

                situacao[alterando] = {
                    pesoPessoa: peso,
                    alturaPessoa: altura,
                    situacao: resultado
                }


                setSituacao([...situacao])

                setAltura(0)
                setPeso(0)
                setAlterando(-1)
            }

           
        }

       
    }

    function alterar(pos) {
       setPeso(situacao[pos].pesoPessoa)
       setAltura(situacao[pos].alturaPessoa)
       setResult(situacao[pos].situacao)
       

       setAlterando(pos)

    }

    function remover(pos) {
        situacao.splice(pos, 1)
        setSituacao([...situacao])
    }


    return (
        <div className='pagina-ex10 pagina'>
           
           <Cabecalho/>

           <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 10 - Calculo de IMC com histórico'
            color = '#B75333'
            />

            <section className='quadro'>
                <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    
                    <div className='inforr'>
                        
                        <div className='info'>
                            <h2>Altura</h2>
                            <input type='text' value={altura} onChange={e => setAltura(e.target.value)}/>
                        </div>
                        <div className='info'>
                            <h2>Peso</h2>
                            <input type='text'value={peso} onChange={e => setPeso(e.target.value)} />
                        </div>
        
                    </div>

                    <button onClick={calcImc}>Executar</button>
                </div>

                <div className='resultados'>

                    {situacao.map((item, pos) =>

                    <div className='cards' key={pos}>

                        <div className='card-result'>

                            <div className='textos'>
                                
                                <h2>Altura:</h2>
                                <h2>{item.alturaPessoa}</h2>
                                
                            </div>
                            
                            <div className='textos'>
                                |
                                <h2>Peso:</h2>
                                <h2>{item.pesoPessoa}</h2>
                                
                            </div>
                            
                            <div className='textos'>
                                |
                                <h2>Situação:</h2>
                                <h2>{item.situacao}</h2>
                            </div>


                        </div>

                        <div className='edicoes'>

                        <button onClick={() => alterar(pos)}><img className = 'alterar'src="/assets/images/alterar.png" /></button>
                        <button onClick={() => remover(pos)}><img src="/assets/images/remover.png" alt="" /></button>
                        </div>

                    </div>

                   
                    )}
                    
                    
                </div>

                
                   
              
            </section>

          
        </div>
    )
}