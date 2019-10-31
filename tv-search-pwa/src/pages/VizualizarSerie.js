import React, { Component } from 'react'
import logo from '../img/paginaAnterior.png';
import Header from '../components/Header';

export default class VizualizarSerie extends Component {
    render() {
        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Vizualizar Série"
                />
            </div>
        )
    }
}
