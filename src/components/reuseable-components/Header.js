import React from 'react'
import img from "../../assets/heart.PNG"
import Button from './Button'




export const Header = (props) => {

    // const attributes = {
        
    // }
    return (
        // <div classname="first">
           <div className = "header">
                <div className = "header-left">

                    <section classname = "header-logo">
                        <img src = {img} alt="Heart"/>
                    </section>

                    <section classname= "header-name"> Francis Ntoka</section>

                </div>
                
                 <div classname = "header-center">
                    <a classname = "a1" href = "#" >
                        Article </a>
                    <a classname="a1" href = "#">Snippets</a>
                    <a  classname="a1" href = "#">About</a>
                    <button>Contact</button>

                </div>

            </div>

        // </div>
        );
}

export default Header; 