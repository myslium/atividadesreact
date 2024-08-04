import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Cupom from "./pages/ex1";
import Conversao from "./pages/ex2";
import TotalQtd from "./pages/ex3";

export default function Navegacao() {

    return (
        <BrowserRouter>
           <Routes>

            <Route path="/" element = {<Inicio/>} />
            <Route path="/ex1" element = {<Cupom/>}/>
            <Route path="/ex2" element = {<Conversao/>}/>
            <Route path="/ex3" element = {<TotalQtd/>}/>

           </Routes>
        </BrowserRouter>
    )
}