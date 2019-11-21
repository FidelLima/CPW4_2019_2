import React, { Component } from 'react';

import logo from "../img/paginaAnterior.png";

import Header from "../components/Header";
import './VisualizarSerie.scss';

export default class VisualizarSerie extends Component {

    render() {
        const { serie, imagem } = this.props.location.state;
        const dados = serie.show;
        console.log(dados);

        let generos = dados.genres[0];
        const quantidadeGeneros = dados.genres.length;
        if (quantidadeGeneros.length > 1) {
            for (let i = 1; i < quantidadeGeneros; i++) {
                generos += `,${dados.genres[i]}`;
            }
        }

        const titulo = dados.name;
        const lingua = dados.language;

        /*let canalTV=";
        if(dados.network){
            canalTV=dados.network.name;
        } */
        const canalTV = dados.network ? dados.network.name : ""; // : é o else         
        const canalWeb = dados.webChannel ? dados.webChannel.name : "";
        const { status } = dados;

        const regex= /(<([^>]+)>)/ig;

        const sinopse = dados.summary.replace(regex,'');

        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Visualizar Série" />

                <div id="areaCartaz">
                    <img src={imagem} alt="Cartaz" />
                </div>

                <div id="areaDadosSerie" >
                    <h2>{titulo}</h2>

                    <span className="nomeCampo">Gênero:</span>
                    <span id="generos">{generos}</span>

                    <span className="nomeCampo">Língua:</span>
                    <span id="lingua">Língua{lingua}</span>


                    {
                        canalTV &&
                        <div>
                            <span id="canalTV"></span>
                            <span className="nomeCampo">Canal de TV:</span>
                        </div>
                    }

                    {
                        canalWeb &&
                        <div>
                            <span className="nomeCampo">Streaming:</span>
                            <span id="canalWeb"></span>
                        </div>
                    }
                    <span className="nomeCampo">Status:</span>
                    <span id="status">{status}</span>

                    <span className="nomeCampo">Sinopse:</span>
                    <div id="sinopse">{sinopse}</div>
                </div>


            </div>
        )
    }
}
