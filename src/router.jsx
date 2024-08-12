import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cupom from "./pages/exercicios/ex1";
import Conversao from "./pages/exercicios/ex2";
import TotalQtd from "./pages/exercicios/ex3";
import Livros from "./pages/exercicios/ex4";
import Media from "./pages/exercicios/ex5";
import SalarioLiquido from "./pages/exercicios/ex6";

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



           </Routes>
        </BrowserRouter>
    )
}