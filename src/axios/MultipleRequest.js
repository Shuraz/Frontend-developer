import React, {useState, useEffect} from 'react'
import axios from 'axios'
const url1="https://jsonplaceholder.typicode.com/users";
const url2="https://jsonplaceholder.typicode.com/posts";

function MultipleRequest() {

    const [api1, setapi1] = useState([])
    const [api2, setapi2] = useState([])
    const handleGetData=()=>{
        axios.all([
            axios.get(url1),
            axios.get(url2)
        ])
        .then((res)=>{
            console.log(res[0].data);
            setapi1(res[0].data);
            console.log(res[1].data)
            setapi2(res[1].data)
        })
    }
    useEffect(()=>{
        handleGetData();
    },[])

    return (
        <div>
            <h2>URL 1..... </h2>
                {
                    api1.map((item)=>{
                        return(
                            
                            <div>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                        </div>
                            )
                    })
                }

                <h2>URL 2 ......</h2>
                {
                    api2.map((item)=>{
                        return(
                            <div>
                                <p>{item.id}</p>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default MultipleRequest
