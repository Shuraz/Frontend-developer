import React,{useReducer} from 'react'

const reducer=(state,action)=>{
  if(action.type==='INCREMENT'){
      return {count:state.count+1}
  }
  if(action.type==='DECREMENT'){
      return{count:state.count-1}
  }
  else
  return state;

}

function ReducerTest1() {
    // const initialState={
    //     count:0
    // }
    const [state,dispatch]= useReducer(reducer,{count:0});
    
    const handleIncrerease=()=>{
        dispatch({type:'INCREMENT'})
    }
    const handleDecrease=()=>{
        dispatch({type:'DECREMENT'})
    }

    return (
        <div>
            <h1>use Reducer increment and DECREMENT</h1>
            <h1>{state.count}</h1>
            <button onClick={handleIncrerease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default ReducerTest1
