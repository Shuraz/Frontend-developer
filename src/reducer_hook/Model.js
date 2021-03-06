import React,{useEffect} from 'react'

function Model({modelClose,modelContent}) {
    useEffect(() => {
      setTimeout(()=>{
        modelClose();
      },3000)
    })
    return (
        <div>
            <h4>{modelContent}</h4>
        </div>
    )
}

export default Model