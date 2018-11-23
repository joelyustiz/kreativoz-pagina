import React from 'react'
import './menu-dropdown.css'

function MenuDropdown(props) {
    return (
        <div 
            className="Menu-dropdown"
            onClick={props.handleClick}
        >
                <div className="Menu-title">
                    <i className={props.menuToggle ? "icon-cross" : "icon-menu" } ></i>
                </div>
        </div>
    )
}

export default MenuDropdown