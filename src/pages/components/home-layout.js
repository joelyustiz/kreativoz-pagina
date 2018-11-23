import React from 'react'
import './home.css'
function HomeLayout(props) {
    return(
        <div className="Home">
            { props.children}
        </div>
    )
}

export default HomeLayout