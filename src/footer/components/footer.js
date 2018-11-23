import React from 'react'
import './footer.css'
import FooterLink from './footer-link'
function Footer(props) {
    return (
        <footer className="Footer">
            <FooterLink 
                link="#"
                text="Quienes somos"
            />
            <FooterLink 
                link="#"
                text="Política de privacidad"
            />
            <FooterLink 
                link="#"
                text="Política de Cookies"
            />
            <FooterLink 
                link="#"
                text="Términos de servicio"
            />
            <FooterLink 
                link="#"
                text="Contacto"
            />
        </footer>
    )
}

export default Footer