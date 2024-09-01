import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cupom from "./pages/exercicios/ex1";
import Conversao from "./pages/exercicios/ex2";
import TotalQtd from "./pages/exercicios/ex3";
import Livros from "./pages/exercicios/ex4";
import Media from "./pages/exercicios/ex5";
import CoresPrimarias from "./pages/exercicios/ex7";
import SalarioLiquido from "./pages/exercicios/ex6";
import Temperatura from "./pages/exercicios/ex8";
import Sorveteria from "./pages/exercicios/ex9";

export default function Navegacao() {

    return (
        <BrowserRouter>
           <Routes>

            <Route path="/" element = {<Inicio/>} />
            <Route path="/ex1" element = {<Cupom/>}/>
            <Route path="/ex2" element = {<Conversao/>}/>
            <Route path="/ex3" element = {<TotalQtd/>}/>
            <Route path="/ex4" element = {<Livros/>}/>
            <Route path="/ex5" element = {<Media/>}/>
            <Route path="/ex6" element = {<SalarioLiquido/>}/>
            <Route path="/ex7" element = {<CoresPrimarias/>}/>
            <Route path="/ex8" element = {<Temperatura/>}/>
            <Route path="/ex9" element = {<Sorveteria/>}/>


           </Routes>
        </BrowserRouter>
    )
}