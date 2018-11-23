import React from 'react'
import './maps-form.css'
import './form.css'
import SectionLayout from './section-layout'
import Form from '../../form/containers/form'

function MapsForm(props) {
    return(
        <SectionLayout 
             SectionLayoutClass="Maps-form"
        > 
       <iframe className="Maps-close Ubicacion"  src="https://maps.google.com/maps?width=720&height=600&hl=es&q=Monterrey%20132%2C%20Interior%20202%2C%20Roma%20Norte%2C%2006700%20Mexico%20City%2C%20CDMX+(Kreativoz)&ie=UTF8&t=&z=15&iwloc=B&output=embed" frameBorder="0"  marginHeight="0" marginWidth="0"></iframe>
        <Form />
        
        </SectionLayout>
    )
}

export default MapsForm