import React from 'react'

const Sked = (props) => {
    return (
        <div>
            <div><h2>{props.name}</h2></div>
            <div><img width='200' src={props.picture} alt="" /></div>
            <div><p>{props.details}</p></div>
        </div>
    )
}

export default Sked