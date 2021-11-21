import React,{memo} from 'react'

function Todos({todos,addTodo}) {
    console.log("...child render...")
    return (
        <div>
            <h1>Todo Lists</h1>
            {todos.map((todo,index)=>{
                return(
                    <p key={index}>
                        {index+1}:{todo}
                    </p>
                )
            })}
            <button onClick={addTodo}>Add Todo</button>

        </div>
    )
}

export default memo(Todos)