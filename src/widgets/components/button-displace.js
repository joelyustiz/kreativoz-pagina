import React from 'react'

function ButtonDisplace(props) {
    return (
            <a 
                className={props.buttonDisplaceClass} 
                href={props.url ? props.url : "#"}
            >
                {props.text}
            </a>
    )
}

export default ButtonDisplace