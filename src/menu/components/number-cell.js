import React from 'react'
import './number-cell.css'

function NumberCell(props) {
    return (
        <div className="NumberCell Menu-mobile">
            <div>
                <i className="icon-phone"></i>
                <a href="tel:+52557777777">+52 55 777 7777</a>
            </div>
            <div>
                <i className="icon-phone"></i>
                <a href="tel:+52557777777">+52 55 777 7777</a>
            </div>
        </div>
    )
}

export default NumberCell