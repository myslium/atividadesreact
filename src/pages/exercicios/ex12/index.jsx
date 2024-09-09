import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'


export default function Comparador() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [generoMas, setGeneroMas] = useState(false);
    const [generoFem, setGeneroFem] = useState(false);
    const [valores, setValores] = useState(['', '', 0, 0, 0]);
    const [resultados, setResultados] = useState([])

    function comparacao () {


        if(nome !== '' && idade !== 0 ) {

            let pessoas = ''

            if (generoFem === true) {
                pessoas = {
                    nome: nome,
                    idade: idade,
                    genero: generoFem
                }
            }
    
            if (generoMas === true) {
                pessoas = {
                    nome: nome,
                    idade: idade,
                    genero: generoMas
                }
            }

            setResultados([...resultados, pessoas])
    
           let mulheresMenos = 0
           let homenstrinta = 0
           let maior = -Infinity
           let menor = Infinity
           let maisVelha = ''
           let mulherMaisJovem = ''
    
           

            if (pessoas.idade > maior) {
                maior = pessoas.idade
                maisVelha = nome
                
            
            }
                
             if (generoFem === true) {

                if (pessoas.idade <= 18) {
                   mulheresMenos++
                }

                
                if (pessoas.idade > menor) { 
                    menor = pessoas.idade
                    mulherMaisJovem = nome
                   
                   
                   
                }
            }

            if (generoMas === true) {

                if (pessoas.idade >= 30) {
                    homenstrinta++
                }

                
            }

           
        }
      

       

      

        setIdade(0)
        setGeneroFem(false)
        setGeneroMas(false)
        setNome('')
    }




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

                <div className='um'>
                <div className='card'>

                    <div className='informacao'>

                        <div className='info'>
                            <h2>Nome</h2>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div className='info'>
                            <h2>Idade</h2>
                            <input type="text" value={idade} onChange={e => setIdade(e.target.value)}/>
                        </div>
                        
                        <div className='genero'>
                            <h2>Sexo</h2>
                            
                            <div className='inputs'>
                               
                               <div className='sexo'>
                                <input type="radio" checked={generoMas} onChange={e => setGeneroMas(e.target.checked)}/>
                                <label>Masculino</label>
                                </div>

                                <div className='sexo'>
                                <input type="radio" checked={generoFem} onChange={e => setGeneroFem(e.target.checked)}/>
                                <label>Feminino</label>


                                </div>

                            </div>
                        </div>


                    </div>
                    
                    <button onClick={comparacao}>Executar</button>
                   
                </div>

              
                 <div className='infos-pessoas'>

                 <h1>Pessoa mais velha: {valores[0]}</h1>
                 <h1>Mulher mais jovem: {valores[1]}</h1>
                 <h1>Média de idade: {valores[2]}</h1>
                 <h1>Homem com mais de 30: {valores[3]}</h1>
                 <h1>Mulheres com menos de 18: {valores[4]}</h1>



                </div>
                

               

                
                </div>

                <div className='resultados'>

                    <h1>Pessoas</h1>

                    <div className='cor'></div>

                    <div className='resul-pessoas'>

                        <div className='cartao'>

                            <div className='info'>

                                <h1>Maria</h1>
                                <h1>18 anos</h1>

                                <h2>Feminino</h2>


                                <div className='botoes'>
                                    <button className='a'>Editar</button>
                                    <button className='b'>Apagar</button>
                                </div>
                            </div>


                        </div>
                    </div>

                  
                  

                   
        
                    
                </div>

                
                   
              
            </section>

          
        </div>
    )
}