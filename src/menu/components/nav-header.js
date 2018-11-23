import React from 'react'
import './nav-header.css'
import ButtonMenu from '../../widgets/components/button-displace'
import MenuDropdown from '../components/menu-dropdrown'
function MenuLayout(props) {
    return(
        <div className="nav">
            <div className="nav-header">
                { props.children }
                    <ButtonMenu text="Cotizar" buttonDisplaceClass="Menu-content-button" />
                    <MenuDropdown 
                        handleClick={props.handleClickMenuToggle}
                        menuToggle={props.menuToggle}
                    />
                
            </div>
            {
                props.menuToggle &&
                <div className="overlay" onClick={props.handleClickMenuToggle}></div>
            }
        </div>            
    )
}

export default MenuLayout