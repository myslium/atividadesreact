import './index.scss'
import { Link } from 'react-router-dom'


export default function Inicio() {

    return (
        <div className='pagina pagina-inicio'>
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
                    <div className='card1'>
                        <div></div>
                        <h1>Cupom de desconto</h1>
                        <h2>Exercício 1</h2>
                    </div>

                    <div className='card2'>
                        <div></div>
                        <h1>Converter Kg/gramas</h1>
                        <h2>Exercício 2</h2>
                    </div>

                    <div className='card3'>
                        <div></div>
                        <h1>Valor total por quantidade</h1>
                        <h2>Exercício 3</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}