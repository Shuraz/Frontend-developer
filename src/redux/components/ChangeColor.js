import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeCol} from '../features/theme';


function ChangeColor() {
    const dispatch=useDispatch();
    const [Color,setColor]=useState("")
    return (
        <div>
            <input type="color" onChange={(e)=>{setColor(e.target.value)}}/>
            <br/>
            <button onClick={()=>{dispatch(changeCol(Color))}}>Change Color</button>
        </div>
    )
}

export default ChangeColor
