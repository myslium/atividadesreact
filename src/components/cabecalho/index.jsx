import { Link } from 'react-router-dom'
import './index.scss'


export default function Cabecalho() {


    return (
        
            <header className='cabecalho'>
                <div>
                <img src="/assets/images/logofrei.png" alt="" />

                <h1>React FreiS</h1>
                </div>
                
                <nav>
                <Link to = '/'><h2>Início</h2></Link>
                <Link to = '/sobre'><h2>Sobre</h2></Link>
                </nav>
            </header>

       
    )
}