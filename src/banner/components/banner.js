import React from 'react'
import './banner.css'
import BannerContent from './banner-content'
function Banner(props) {
    return(
        <section className="Banner">
            <BannerContent
                title={props.title}
                text={props.text}
            />
        </section>
    )
}

export default Banner