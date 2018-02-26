import React, { Component } from 'react'
import Sked from "./Sked"

const SkedsList = (props) => {

    const skeds = props.skeds.map((sked) => {
        return (
            <Sked {...sked} deleteSked={props.deleteSked} key={sked.id}/>
        )
    })
    return (
        <div>
            {/* <h1>Welcome {user.nickname}</h1>
            <div><img src="user.image" alt=""/></div> */}
            <h1>Skeds</h1>

            {props.skeds.length > 0 ? skeds : null}
        </div>
    )
}

export default SkedsList