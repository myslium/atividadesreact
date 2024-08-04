import './index.scss'
import { Link } from 'react-router-dom'


export default function Inicio() {

    return (
        <div className='pagina-inicio'>
            <header>
                <img src="/assets/images/logofrei.png" alt="" />

                <h1>React FreiS</h1>
                <nav>
                <Link to = '/'><h2>Início</h2></Link>
                <Link to = '/sobre'><h2>Sobre</h2></Link>
                </nav>
            </header>
            <section>
                <h1>Escolha um treino...</h1>

                <div className='exercicios'>
                    
                    <div className='card'>
                        <div className='um'></div>
                        <Link to = '/ex1'>
                        <h2>Cupom de desconto</h2>
                        </Link>
                        <h3>Exercício 1</h3>
                    </div>
                   
                    
                    
                    <div className='card'>
                        <div className='dois'></div>
                        <Link to = '/ex2'>
                        <h2>Converter Kg/gramas</h2>

                        </Link>
                        <h3>Exercício 2</h3>
                    </div>
                     
                    
                    
                    <div className='card'>
                        <div className='tres'></div>
                        <Link to = '/ex3'>
                        <h2>Valor total por quantidade</h2>

                        </Link>
                        <h3>Exercício 3</h3>
                    </div>    
                   
                
                </div>
            </section>
        </div>
    )
}