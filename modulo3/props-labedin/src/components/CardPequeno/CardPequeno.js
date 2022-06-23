import React from 'react';
import './CardPequeno.css'

function ImagemButton(props) {
    return (
        <div className="card-pequeno-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton; 