import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
import adicionar from '../../img/adicionar.png';

export default class Listas extends Component {

    constructor() {
        /**
         * Toda vez que criar um construtor
         * em um componente React, lembre-se
         * de invocar o construtor da classe
         * mãe Component na primeira linha de
         * código.
         */
        super();

        this.state = {
            listas: []
        }

        this.service = new ListaService();
    }

    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(lista => (
                <div className="item" key={lista._id}>{lista.nome}</div>
            ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Lista de Compras" />

                <div className="conteiner">
                    <div>

                        {
                            //Nesse cod o operador and(&&) atua como se fosse um operador de ligação entre a condição lógica e o codigo de apresentação a ser realizada
                            !this.state.listas &&
                            <h2>Minhas listas</h2>
                        }

                        {
                            this.state.listas &&
                            <p id="mensagemNenhumaLista">Cadastre já sua Lista de Compras</p>
                        }

                        <div id="listagem">
                            {listas}
                        </div>

                        <div id="areaBotao">
                            <Link to="/criarLista">
                                <div id="botaoNovaLista">
                                    <img src={adicionar} alt="Nova lista" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
