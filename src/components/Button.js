import React from "react"

export default function Button(props) {
    let buttonOrder = Math.floor(Math.random() * 9);
    return(
        <button
            name={props.name}
            type="button"
            className="button"
            onClick={props.handleButton}
            style={
                {order: `${buttonOrder}`} 
            }
        >
        {props.color}
        </button>
    )
}