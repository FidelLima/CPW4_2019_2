import React, { Component } from 'react';
import Menu from '../menu/Menu';
import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';

class Listas extends Component {

    constructor() {
        // toda vez que criar o constructor lembrar de invocar o construtor da classe component. mãe component na primeira linha de cod

        super();

        this.state = {
            listas: []
        }
        this.service = new ListaService();
    }

    componentDidMount() {
        const listas =
            this.service.recuperarListas();
        this.setState({ listas });
    }


    render() {
        const listas =
            this.state.listas.map(lista => (
                <li key={lista._id}>{lista.nome}</li>
            ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Minhas Listas" />
                <div className="container">
                    <div>
                        <h2>Minhas Listas</h2>

                        <ul>
                            {listas}

                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Listas;