import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'


export default function Comparador() {

 
    return (
        <div className='pagina-ex12 pagina'>
           
           <Cabecalho/>

           <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 12 - Comparador de pessoas'
            color = '#FFCE37'
            />

            <section className='quadro'>
                <p>Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.</p>
            </section>

            <section className='ex'>

                <div className='card'>

                    <div className='informacao'>

                        <div className='info'>
                            <h2>Nome</h2>
                            <input type="text" />
                        </div>
                        <div className='info'>
                            <h2>Idade</h2>
                            <input type="text" />
                        </div>
                        
                        <div className='genero'>
                            <h2>Sexo</h2>
                            
                            <div className='inputs'>
                               
                               <div className='sexo'>
                                <input type="radio" />
                                <label>Masculino</label>
                                </div>

                                <div className='sexo'>
                                <input type="radio" />
                                <label>Feminino</label>


                                </div>

                            </div>
                        </div>


                    </div>
                    
                    <button>Executar</button>
                   
                </div>

                <div className='resultados'>

                  
                  

                   
        
                    
                </div>

                
                   
              
            </section>

          
        </div>
    )
}