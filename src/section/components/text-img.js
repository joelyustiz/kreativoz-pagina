import React from 'react'
import './text-img.css'
import TextImgContent from './text-img-content'
import HeaderImg from '../../../images/img.jpg'
import SectionLyaout from './section-layout'

function TextImg(props) {
    
    return(
        <SectionLyaout id="text-img" SectionLayoutClass="Section-text-img">
            <div className="Text-img">
                <TextImgContent 
                    title="Titulo 1"
                    parrafo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates alias obcaecati facere quos vero nemo consequatur accusantium delectus est, enim quaerat neque doloremque expedita pariatur mollitia magni ullam in."
                    textbtn="Boton 2"
               />
                <img src={HeaderImg} alt=""/>
            </div>
            <div className="Text-img">
                <img src={HeaderImg} alt=""/>
                <TextImgContent 
                    title="Titulo 2"
                    parrafo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates alias obcaecati facere quos vero nemo consequatur accusantium delectus est, enim quaerat neque doloremque expedita pariatur mollitia magni ullam in."
                    textbtn="Boton 1"
                />
            </div>
        </SectionLyaout>
    )
}

export default TextImg