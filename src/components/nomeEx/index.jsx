import './index.scss'
import { Link } from 'react-router-dom'


export default function NomeExercicio(props) {

    return (
        <section className='titulo'>

            <div className='nome'>
                <Link to = {props.link}>
                <img src= {props.img} />
                </Link>
                
                <h1>{props.exercicio}</h1>

            </div>
               

                <div  style={{backgroundColor: props.color}}></div>
        </section>

        
    )
             
    
}