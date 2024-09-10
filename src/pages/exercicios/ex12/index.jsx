import './index.scss'

import { useState } from 'react'
import NomeExercicio from '../../../components/nomeEx'
import Cabecalho from '../../../components/cabecalho'
import Texto from '../../../components/texto'

export default function Comparador() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [genero, setGenero] = useState('');
    const [resultados, setResultados] = useState([]);
    const [alterando, setAlterando] = useState(-1);

    const [valores, setValores] = useState({
        velho: "",
        mulherJovem: "",
        media: 0,
        homens30: 0,
        mulheres18: 0
    });

    function comparacao() {
        if (nome !== '' && idade !== '' && genero !== '') {
            let pessoa = {
                nome: nome,
                idade: idade,
                genero: genero
            }

            
            if (alterando === -1) {
                setResultados([...resultados, pessoa])
            } 
            
            else {
                resultados[alterando] = {
                    nome: nome,
                    idade: idade,
                    genero: genero
                
                }


                setResultados([...resultados])
            }

           


            let maior = -Infinity;
            let menor = Infinity;
            let nm = "";
            let nmn = "";
            let outro = 0;
            let outro1 = 0;
            let soma = 0;

            for (let i = 0; i < resultados.length; i++) {
                
                
                let item = resultados[i]
                soma += item.idade;

                if (item.idade > maior) {
                    maior = item.idade;
                    nm = item.nome;
                
                }

                if (item.genero === 'Feminino' && item.idade < menor) {
                    menor = item.idade;
                    nmn = item.nome;
                   
                }

                if (item.genero === 'Masculino' && item.idade > 30) {
                    outro++;
                }

                if (item.genero === 'Feminino' && item.idade < 18) {
                    outro1++;
                }
            }

            let media = soma / resultados.length;

            setValores({
                velho: nm,
                mulherJovem: nmn,
                media: media.toFixed(2),
                homens30:  outro,
                mulheres18: outro1,
                
                

            });

            setNome('');
            setIdade('');
            setGenero('');
        }
    }

    function remover(pos) {
        resultados.splice(pos, 1);
        setResultados([...resultados]);
    }

    function alterar(pos) {
        
        setNome(resultados[pos].nome);
        setIdade(resultados[pos].idade);
        setGenero(resultados[pos].genero);
        setAlterando(pos);
    }

    return (
        <div className='pagina-ex12 pagina'>

            <Cabecalho />

            <NomeExercicio

                link='/'
                img='/assets/images/voltar.png'
                exercicio='Exercício 12 - Comparador de pessoas'
                color='#FFCE37'
            />

            <Texto

                p={`Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.`}

            />

            <section className='ex'>

                <div className='um'>
                    <div className='card'>

                        <div className='informacao'>

                            <div className='info'>
                                <h2>Nome</h2>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div className='info'>
                                <h2>Idade</h2>
                                <input type="text" value={idade} onChange={e => setIdade(e.target.value)} />
                            </div>

                            <div className='genero'>
                                <h2>Sexo</h2>

                                <div className='inputs'>

                                    <div className='sexo'>
                                    <input type='radio' name='gpo' value="Masculino" onChange={e => setGenero(e.target.value)} checked={genero === 'Masculino'} />
                                        <label>Masculino</label>
                                    </div>

                                    <div className='sexo'>
                                    <input type='radio' name='gpo' value="Feminino" onChange={e => setGenero(e.target.value)} checked={genero === 'Feminino'} /> 

                                        <label>Feminino</label>


                                    </div>

                                </div>
                            </div>


                        </div>

                        <button onClick={comparacao}>Executar</button>

                    </div>


                    <div className='infos-pessoas'>

                        <h1>Pessoa mais velha: {valores.pessoaVelha}</h1>
                        <h1>Mulher mais jovem: {valores.nomeNova}</h1>
                        <h1>Média de idade: {valores.media}</h1>
                        <h1>Homem com mais de 30: {valores.homens30}</h1>
                        <h1>Mulheres com menos de 18: {valores.mulheres18}</h1>



                    </div>





                </div>

                <div className='resultados'>

                    <h1>Pessoas</h1>

                    <div className='cor'></div>

                    <div className='resul-pessoas'>

                        {resultados.map((item, pos) =>


                            <div className='cartao' key={pos}>

                                <div className='info'>

                                    <h1>{item.nome}</h1>
                                    <h1>{item.idade} anos</h1>

                                    <h2>{item.genero}</h2>


                                    <div className='botoes'>
                                        <button  onClick={() => alterar(pos)} className='a'>Editar</button>
                                        <button  onClick={() => remover(pos)}className='b'>Apagar</button>
                                    </div>
                                </div>


                            </div>

                        )}

                    </div>







                </div>




            </section>


        </div>
    )
}