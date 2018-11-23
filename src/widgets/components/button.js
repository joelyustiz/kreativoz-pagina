import React from 'react'

function Button(props) {
    return(
        <button 
            className={props.buttonClass} 
            onClick={props.handleClik}
            disabled={props.disabled}
            type={props.type}
        >
            {props.text}
        </button>
    )
}

export default Button