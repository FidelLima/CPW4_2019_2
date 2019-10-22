import React  from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';

import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component ={Inicio}/>               
          
         </Switch>
    </BrowserRouter>
);
export default Rotas;