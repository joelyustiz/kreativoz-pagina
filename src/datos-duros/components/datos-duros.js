import React from 'react'
import './datos-duros.css'
import CardDatos from './card-datos'

function DatosDuros(props) {
    console.log(props.datosDuros)
    return (
        <section className="Datos-duros">
            {
                props.datosDuros.map((item) =>{
                    return (<CardDatos 
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                parrafo={item.parrafo}
                            />)
                })
            }
        </section>
    )
}

export default DatosDuros