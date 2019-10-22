import React, { Component } from 'react';

import Menu from '../../src/components/Menu';
import logo from '../../src/img/logo1.png';
import Axios from 'axios';




import './Inicio.scss';
export default class Inicio extends Component {


    constructor(props) {
        super(props);

        this.state = {
            animes: [],
            // tem que apagar isso aqui,pesquisar o anime,colocar isso d volta aaí aparece la hahah
            anime: this.props.location.state.anime.nome
        };

    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome });

    }

    consultar = (event) => {
        event.preventDefault();
        const anime = this.state;
        this.props.history.push({
            state: { anime: anime }
        });
    }
    async componentDidMount() {
        let URL = 'https://api.jikan.moe/v3/search/anime?q=' + this.state.anime;
        Axios.get(URL)
            .then(res => {
                const animes = res.data.results;
                console.log(animes)
                this.setState({ animes });
            })
            .catch(ex => {
                console.log('Falha', ex)
            });
    }


    render() {

        return (
            <div>
                <Menu logo={logo} titulo="AnimeTube" />

                <div className="conteiner" onSubmit={this.consultar}>
                    <form id="formNovaLista" >
                        <input
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            required
                            placeholder="Digite o nome do seu anime"
                            onChange={this.aoAlterarNome}

                        />
                        <input type="submit" value="Buscar" />
                        {this.state.animes.map(anime => (
                            <div className="icon">
                                <img className="imagem" src={anime.image_url} />
                                <div className="text">{anime.title} </div>
                                <div className="text"> {anime.synopsis}</div>
                              

                            </div>

                        ))}
                    </form>
                </div>


            </div>
        )
    }
}