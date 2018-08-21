import React from "react";

export default function ListDisplay(props){
    let list = props.list.map((char,index)=>{
        return(
            <li onMouseOver={props.function}
                key={index}>{char}</li>
        )
    })
    
    return(
        <div>
            {list}
        </div>
    )

}