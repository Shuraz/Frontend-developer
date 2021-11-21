import React,{useState, useCallback} from 'react'
import Todos from './Todos'

function UseMemoApp() {
    const [count, setcount] = useState(0)
    const [todos, setTodos]= useState([]);
    const todoHandle= useCallback(()=>{
        setTodos([...todos, "newTodo"])
    },[todos])
    return (
        <div>
        
            <h2>UseMemo test</h2>
            <Todos todos={todos} addTodo={todoHandle}/>
           <h1>{count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Click to Add(+)</button>
            
        </div>
    )
}

export default UseMemoApp
