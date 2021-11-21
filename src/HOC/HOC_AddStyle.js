import React from 'react'

function HOC_AddStyle(BaseComponent) {
    return function withStyleComponent({...props}){
        return (
           <BaseComponent {...props} style={{color:'green', fontWeight:500}}/>
        )
    }
 
}

export default HOC_AddStyle
