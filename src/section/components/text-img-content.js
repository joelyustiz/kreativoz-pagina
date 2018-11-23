import React from 'react'
import './text-img-content.css'
import Button from '../../widgets/components/button-displace'

function TextImgContent(props) {
    return (
        <div className="Text-img-content">
            <div className="Text-img-content-title">
                <h2>{props.title}</h2>
            </div>
            <div className="Text-img-content-parrafo">
                <p>{props.parrafo}</p>
            </div>
            <Button 
                buttonDisplaceClass="btn-text-img"
                text={props.textbtn}
            />
        </div>
    )
}

export default TextImgContent