import React from 'react'

function Goal(props) {
    const goal=props.goal;

    if(goal){
      return  <GoalA/>
    }
    else{
      return  <GoalB/>
    }
    //shorcircuit operator
    // return (
    //     <div>
    //         {goal && <GoalA/> }
    //         {goal || <GoalB/>}
    //     </div>
    // )
}


function IfTest() {
    return (
       <Goal goal={true}/>
    )
}


export default IfTest

function GoalA(){
    return(
        <h1>Accomplished Goal A</h1>
    )
}

const GoalB=()=>{
    return(
        <h1>Accomplished Goal B</h1>
    )
}