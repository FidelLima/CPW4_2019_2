import React, { Component } from 'react';

import ItemContato from './ItemContato';
import email from '../img/email.png';
import endereco from '../img/endereco.png';
import fone from '../img/fone.png';

class Contato extends Component {
    render() {
        return (
            <div>

                <h3>Contato</h3>
                <ItemContato icone={endereco} descricao="endereco" Contato="Rua joao leite reibeiro " />

                <ItemContato icone={fone} descricao="fone" Contato="999999999" />

                <ItemContato icone={email} descricao="email" Contato="cr.belga@gmail.com" />

            </div>
        );
    }
}

export default Contato;