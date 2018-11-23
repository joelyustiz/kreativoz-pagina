import React from 'react'
import LogoImg from '../../../images/logo.png'
import './logo.css'

function Logo(props) {
    return (
        <div className="Logo">
            <a href="#">
                <img className="Logo-full" src={LogoImg} alt=""/>
            </a>
        </div>
    )
}
export default Logo