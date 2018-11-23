import React, { Component } from 'react'
import NavHeader from '../components/nav-header'
import Logo from '../../logo/components/logo'
import MenuContent from '../components/menu-content'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
             menuToggle: false
            };

        this.handleClickMenuToggle = this.handleClickMenuToggle.bind(this)
      }

    handleClickMenuToggle(event) {
        console.log("Que buen click")
        console.log(event)
        console.log(this)
        if(!this.state.menuToggle){
            this.setState({
                menuToggle: true
            })
        } else {
            this.setState({
                menuToggle: false
            })
        }

        // setInterval(() => console.log("hola"), 1000)
    }
    

    render(){
        return(
            <NavHeader 
                handleClickMenuToggle={this.handleClickMenuToggle}
                menuToggle={this.state.menuToggle}
            >
                <Logo />
                <MenuContent 
                    menuToggle={this.state.menuToggle}
                /> 
            </NavHeader>  
        )
    }
}

export default Menu