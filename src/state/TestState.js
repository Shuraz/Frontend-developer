import React, { useState } from 'react'

function TestState() {
    // const [state, setState]=useState("testby suraj")
    const [state,setState]=useState({name:"Suraj",address:"Granville",email:"surajpok.au@gmail.com"})
    const inputHandle=(e)=>{
        setState(previousState=>{
            return {...previousState, name:e.target.value}
        })
    }
    return (
        <div>
            <p>{state.name} {state.address} {state.email}</p>
            <input type="test" onChange={(e)=>{setState({...state,address:(e.target.value)})}} value={state.address}/>
            <input type="test" onChange={(e)=>{inputHandle(e)}} value={state.name}/>
        </div>
    )
}

export default TestState
