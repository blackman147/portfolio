import React from 'react'

export const article_heading = (props) => {
    return (
        <div className = "article_head">
            {props.logo}
            <div >
                
                <p className = "p3">{props.title}</p>
                <p className="date">{props.date}</p>
               
            </div>
            
        </div>
    )
}

export default article_heading
