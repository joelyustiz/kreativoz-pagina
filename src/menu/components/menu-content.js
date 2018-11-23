import React from 'react'
import './menu-content.css'
import NumberCell from './number-cell'
import WhatsappMenu from './Whatsapp-menu'
import CorreoMenu from './correo-menu'
import './button-menu.css'

function NavHeader(props) {
    return (
        <div className={props.menuToggle ? "Menu-content Open" : "Menu-content"}>
            <NumberCell />
            <WhatsappMenu />
            <CorreoMenu />
        </div>
    )
}

export default NavHeader