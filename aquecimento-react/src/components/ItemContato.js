import React, { Component } from 'react';
import './ItemContato.css';
class ItemContato extends Component {
    render() {
        return (
            <div className="itemContato">
                <img src={this.props.icone} alt="Conato"/> 
                <span id="descrecao">{this.props.descricao}</span>
                :
                <span id="contato">{this.props.contato}</span>
            </div>
        );
    }
}

export default ItemContato;