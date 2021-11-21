import React from 'react'

function HelloComp({name, ...otherProps}) {
    return (
        <div {...otherProps}>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default HelloComp
