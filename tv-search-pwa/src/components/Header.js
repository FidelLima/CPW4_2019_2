import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';




const Header = props => ( //nao sei oqe isso ta fazendo 
    <div className="header">
        <Link to={props.enderecoPaginaAnterior}>
        <img src={props.logo} alt= "Logo" />

        </Link>

        <span>{props.titulo}</span>
    </div>
);

export default Header;