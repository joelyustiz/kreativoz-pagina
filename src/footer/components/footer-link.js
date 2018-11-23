import React from 'react'
import './footer-link.css'

function FooterLink(props) {
    return (
        <a className="Footer-link" href={props.link}>{props.text}</a>
    )
}

export default FooterLink