import { BrowserRouter, Routes,Route } from "react-router-dom";

import Home from '../paginas/Home';
import Sabores from '../paginas/sabores';
import Sobre from '../paginas/sobre';

export default function Rotas (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Sabores" element={<Sabores/>} />
            <Route path="/Sobre"  element={<Sobre/>} />
        </Routes>
        </BrowserRouter>
    )
}