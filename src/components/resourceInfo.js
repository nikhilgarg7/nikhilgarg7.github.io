import React from "react"

function resourceInfo(props) {
    return (
        <div>
            <h3><a href={props.url}>{props.title}</a></h3>
            <p>{props.description}</p>
        </div>
    )
}

export default resourceInfo;