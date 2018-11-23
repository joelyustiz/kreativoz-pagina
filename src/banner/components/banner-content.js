import React from 'react'
import Button from '../../widgets/components/button-displace'
import './banner-content.css'


function BannerContent(props) {
    return (
        <article className="Banner-content">
            <div className="Banner-content-text">
                <h1>{props.title}</h1>
                <h3>{props.text}</h3>
            </div>
            <div className="btn-content">
                <Button 
                    buttonDisplaceClass={"Button-banner"}
                    text={"Texto 1"}
                />
                <Button 
                    buttonDisplaceClass={"Button-banner"}
                    text={"Texto 1"}
                />
            </div>
        </article>

    )
}
export default BannerContent