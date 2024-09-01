import './index.scss'
import Cabecalho from '../../components/cabecalho'
import DivExercicios from '../../components/div'


export default function Inicio() {

    return (
        <div className='pagina-inicio pagina'>
           <Cabecalho/>
            <section>
                <h1>Escolha um treino...</h1>

                <div className='exercicios'>
                
                    <DivExercicios
                    
                    link = '/ex1'
                    color = '#FFCE37'
                    nome = 'Cupom de desconto'
                    ex = 'Exercício 1'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex2'
                    color = '#B3FF37'
                    nome = 'Converter kg/gramas'
                    ex = 'Exercício 2'
                    
                    />
                    
                    <DivExercicios
                    
                    link = '/ex3'
                    color = '#37FFF3'
                    nome = 'Valor total por quantidade'
                    ex = 'Exercício 3'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex4'
                    color = '#37B7FF'
                    nome = 'Leitura de livro'
                    ex = 'Exercício 4'
                    
                    />
                    <DivExercicios
                    
                    link = '/ex5'
                    color = '#CB37FF'
                    nome = 'Média de notas'
                    ex = 'Exercício 5'
                    
                    />

                    

                    <DivExercicios
                    
                    link = '/ex6'
                    color = '#FF5B37'
                    nome = 'Sálario líquido'
                    ex = 'Exercício 6'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex7'
                    color = '#37FFAB'
                    nome = 'Cores primárias'
                    ex = 'Exercício 7'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex8'
                    color = '#000'
                    nome = 'Temperatura'
                    ex = 'Exercício 8'
                    
                    />


                    <DivExercicios
                    
                    link = '/ex9'
                    color = '#D0D0D0'
                    nome = 'Sorveteria'
                    ex = 'Exercício 9'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex10'
                    color = '#B75333'
                    nome = 'Calculo de IMC'
                    ex = 'Exercício 10'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex11'
                    color = '#6533B7'
                    nome = 'Tabuada'
                    ex = 'Exercício 11'
                    
                    />

                    <DivExercicios
                    
                    link = '/ex12'
                    color = '#FFCE37'
                    nome = 'Comparador de pessoas'
                    ex = 'Exercício 12'
                    
                    />
                
                </div>

              
            </section>
        </div>
    )
}