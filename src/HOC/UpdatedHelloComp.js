import React from 'react'
import HOC_AddStyle from './HOC_AddStyle'
import HelloComp from './HelloComp'
function UpdatedHelloComp() {
    const NewHello=HOC_AddStyle(HelloComp);
    return (
        <NewHello name="WORLD"/>
    )
}

export default UpdatedHelloComp
