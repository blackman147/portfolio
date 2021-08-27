import React from 'react'

export const Button = (props) => {
    const btn ={
        
        title: props.title
    }
    return (
        <div className =  "button-div">
            <button style = {btn}>{props.title}</button>
        </div>
    )
}

export default Button