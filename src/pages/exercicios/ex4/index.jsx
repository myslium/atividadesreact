import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'

export default function Livros() {

    const [nome, setNome] = useState('')
    const [pagina, setPagina] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [titulo, setTitulo] = useState('')


    function tempoPagina () {
        setResultado(((pagina * segundos)/3600).toFixed(2))
        setNome('')
        setPagina(0)
        setSegundos(0)
        setTitulo(nome)
    }

    return (
        <div className='pagina-ex4 pagina'>
           <Cabecalho/>

           <NomeExercicio
            
            link = '/'
            img = '/assets/images/voltar.png'
            exercicio = 'Exercício 04 - Leitura de livro'
            color = '#37B7FF'
            />

            <section className='quadro'>
                <p>Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    
                    <div className='livro'>
                        
                        <div className='espaco'>
                            <h2>Nome do livro:</h2>
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div className='espaco'>
                            <h2>Quantidade de páginas</h2>
                            <input type='text' value={pagina} onChange={e => setPagina(e.target.value)}/>
                        </div>
                        <div className='espaco'>
                            <h2>Tempo em segundos</h2>
                            <input type='text' value={segundos} onChange={e => setSegundos(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={tempoPagina}>Executar</button>
                </div>


                <div>
                <h3>Você lerá {titulo} em {resultado} horas</h3>

                </div>
            </section>

          
        </div>
    )
}