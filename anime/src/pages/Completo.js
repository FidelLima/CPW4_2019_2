import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../src/components/menu/Menu';
import volta from '../../src/img/seta1.jpg';

import ListaService from '../../src/services/ListaServices';
import rotas from '../../src/constant/rotas';
import Axios from 'axios';

import './AnimEstilo.scss';
export default class ListaAnime extends Component {

   
    
    render() {
        const animeList =
            this.state.animes.map(anime => (
                <Link
                    to={
                        {
                            pathname: rotas.COMPLETO,
                            state: { anime }
                        }
                    }
                    key={anime.mal_id}>
                    <div className="icon">
                        <img className="imagem" src={anime.image_url} />
                        <div className="text">{anime.title} </div>
                        <div className="text">{anime.synopsis}</div>
                    </div>
                </Link>
            ));
                    
        return (
            <div>
                <Menu paginaAnterior="/" titulo="Web Anime" logo={volta}/>            
                
               {animeList}

            </div>
            
           
        );
    }
}