import React from "react";
import {  
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Pesquisar from './pages/Pesquisar';
import VizualizarSerie from './pages/VizualizarSerie';


const Rotas = () => (
    <BrowserRouter>
    <Switch>
        
        <Route exact path ="/" component={Pesquisar} />
        <Route exact path ="/serie" component={VizualizarSerie} />
        
    </Switch>
    </BrowserRouter>
);

export default Rotas;