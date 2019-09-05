import React, { Component } from 'react'
import Menu from '../menu/Menu';
import icone from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
export default class CriarLista extends Component {

    state={
        nome:''
    };
    //importante
    aoAlterarNome = (event) =>{
        const nome =event.target.value;
        this.setState({ nome });
    }
    //importante
    salvar =(event) =>{
        event.preventDefault();//nao recarrega a pagina 
        const service = new ListaService();
        const lista = this.state;
        service.salvar(lista);

        //faz o encaminhamento do app
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Menu 
                paginaAnterior ="/"
                titulo="Criar Lista"
                logo={icone}/>

                <form id="formNovaLista" onSubmit={this.salvar}>
                  <input
                  onChange={this.aoAlterarNome}
                    type="text"
                    name="nome"
                    value={this.state.nome}
                    required
                    placeholder="Digite o nome da lista"/>
                    <input type="submit" value="Criar" />
                </form>
            </div>
        )
    }
}
