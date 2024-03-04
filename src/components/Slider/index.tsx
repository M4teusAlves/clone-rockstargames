import { useState } from "react";
import "./style.css"
import { ads } from "../data";

interface Props{
    game:string;
    title:string;
    button:string;
    image:string;
}

export function Slider(){

    const [select, Setselect] = useState({game: 'Grand Theft Auto VI',title: '1º Trailer',button: 'ASSISTA AGORA', image:'src/assets/img/gtavi.png'})

    function classColor(prop:Props){
        
        if(select.title === prop.title && select.image === prop.image){
            return "selected"
        } 

        return "slide"

    }

    return(
        <div id="slider">
            <img src={select.image} className="adImage"/>
            <div>
                <div>
                    <p className="adGame">{select.game}</p>
                    <p className="adTitle">{select.title}</p>
                    <button className="adButton">{select.button}</button>
                </div>
                <ul>
                    {ads.map((ad : Props) => (
                                <li onClick={()=>Setselect(ad)} className={classColor(ad)}></li>
                    ))}
                </ul>
            </div>
            
            
        </div>
    )
}