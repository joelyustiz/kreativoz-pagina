import React from 'react'
import './card-datos.css'
function CardDatos(props) {
    return(
        <div className="Card-datos">
            <div className="Card-datos-icon">
                <i className={props.icon}></i>
            </div>
            <div className="Card-datos-title">
                <h3>{props.title}</h3>
            </div>
            <div className="Card-datos-parrafo">
                <p>{props.parrafo}</p>
            </div>
        </div>
    )
}

export default CardDatos