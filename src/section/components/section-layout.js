import React from 'react'

function SectionLayout(props) {
    return(
        <section id={props.id} className={props.SectionLayoutClass}>
            {props.children}
        </section>
    )
}

export default SectionLayout