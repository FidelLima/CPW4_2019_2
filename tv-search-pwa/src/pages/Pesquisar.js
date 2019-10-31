import React, { Component } from 'react'

import logo from '../img/logo.png';
import Header from '../components/Header';

export default class Pesquisar extends Component {
    render() {
        return (
            <div>
                
                <Header //ta mostrando a tela 
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Tv Search"
                />
            </div>
        )
    }
}
