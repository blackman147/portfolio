import React from 'react'
import {BiChevronsRight} from "react-icons/bi"
import {DiJsBadge} from "react-icons/di"
import {DiReact} from "react-icons/di"
import {SiStorybook} from "react-icons/si"
import Article_heading from './Article_heading'

export const Body = () => {

    const article_head = [
        {"logo": <DiJsBadge color = "#F7DF1E"/>, "title": "Reducing cognitive load by theming my tools", "date":"September 08, 2019" }, 
        {"logo": <DiReact color = "#61DAFB"/>, "title": "Code splitting & loading a sever side rendered React app", "date": "September 08, 2019"},
        {"logo": <SiStorybook  color = "#FF4785"/>, "title": "Easy project switching with Itermocil & command line shotcuts", "date": "September 08, 2019" }
    ]

    return (
        <div>
            <div>
                <h1 className = "home-body">I'm Francis, software engineer<br></br> and interface designer.</h1>
            </div>

            <div>
                <p className="p1">
                    I specialize in rapidly prototyping software companies and web<br></br>
                    applications. I talk about my journey on <a className="twitter" href = "https://twitter.com/theBlackman_7" target = "_blank">Twitter</a>, commit to <a className ="github" href = "https://github.com/blackman147" target="_blank">Github</a>,<br></br>
                    and take shots on <a className="dribble" href = "https://dribbble.com/" target= "_blank">Dribble</a>.
                </p>
            </div>

            
            <div className = "latest">
                <h3>Latest Article</h3>
              

                <div className = "articles">
                    <p className = "p2">All articles <BiChevronsRight/></p>
                </div>     
            
            </div>
                
            <div>
                {article_head.map((article ) =>{
                    return(
                        <Article_heading logo= {article.logo} title = {article.title} date={article.date} />
                    )
                }
                )}
                

            </div>    
                
           
            

        </div>
       
    )
}

export default Body
