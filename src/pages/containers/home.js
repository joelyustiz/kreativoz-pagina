import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Menu from '../../menu/containers/menu'
import Banner from '../../banner/components/banner'
import DatosDuros from '../../datos-duros/components/datos-duros'
import TextImg from '../../section/components/text-img'
import MapsForm from '../../section/components/maps-form'
import Footer from '../../footer/components/footer'

class Home extends Component {
    constructor (props){
        super(props)
        this.state = {
            banner:{
                title:"Titulo",
                text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur et reiciendis beatae debitis iure odio. Accusantium  repellendus quae possimus asperiores illum ducimus dolor praesentium? Minima fugit impedit nemo beatae deleniti?'
            },
            datosDuros:[
                {  
                    id: 1,
                    icon:"icon-bubbles4",
                    title:"titulo 1",
                    parrafo:"accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href but still need the element to resemble a link, use a but "
                },
                {
                    id: 2,
                    icon:"icon-stats-dots",
                    title:"titulo 2",
                    parrafo:"accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a but "
                },
                {
                    id:3,
                    icon:"icon-user-tie",
                    title:"titulo 3",
                    parrafo:"accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid  href, but still need the element to resemble a link, use a but "
                },
                {
                    id:4,
                    icon:"icon-kreactivoz",
                    title:"titulo 4",
                    parrafo:"accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a but "
                }
            ],
            sectionTextImg:[
                {
                    title:"Titulo 1",
                    parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates alias obcaecati facere quos vero nemo consequatur accusantium delectus est, enim quaerat neque doloremque expedita pariatur mollitia magni ullam in.",
                    textbtn:"Boton 1"
                },
                {
                    title:"Titulo 2",
                    parrafo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates alias obcaecati facere quos vero nemo consequatur accusantium delectus est, enim quaerat neque doloremque expedita pariatur mollitia magni ullam in.",
                    textbtn:"Boton 2"
                }
            ]
        }
    }


    render(){
        return (
            <HomeLayout>
               <Menu />
               <Banner 
                    title={this.state.banner.title}
                    text={this.state.banner.text}
                />
               <DatosDuros  datosDuros={this.state.datosDuros}/>
               <TextImg textImg={this.state.sectionTextImg}/>
               <MapsForm />
               <Footer />
            </HomeLayout>   
        )
    }
}

export default Home
