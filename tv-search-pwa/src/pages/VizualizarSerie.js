import React, { Component } from 'react'
import logo from '../img/paginaAnterior.png';
import Header from '../components/Header';

export default class VizualizarSerie extends Component {
    render() {

        const {serie, imagem} = this.props.location.state;
        const dados = serie.show;

        let generos = dados.genres[0]
        const quantidadesGeneros = dados.genres.length;
        if(quantidadesGeneros > 1){
            for(let i =1; i <quantidadesGeneros; i++){
                generos += `, ${dados.genres[i]}`;
            }
        }

        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Vizualizar Série"
                />

                <div id="areaCartaz">
                    <img src={imagem} alt="Cartaz" /> 
                </div>
                <div id="areaDadosSerie">
                    <h2>{dados.name}</h2>

                    <span id="generos">{generos}</span>
                </div>
            </div>
        )
    }
}
