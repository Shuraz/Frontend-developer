import React ,{useState,useEffect} from 'react'
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/posts';

function AxiosTest() {
    const [urlData, seturlData] = useState([]);
    const getData=()=>{
        axios.get(url).then((resp)=>{
            console.log(resp);
            seturlData(resp.data)
        })
    }

    const postData=()=>{
        axios.post(url,{
            title:"Hello guys",
            body:"this is updated by suraj."
        })
        .then((resp)=>{
            seturlData(resp.data)
        })
    }
    const deleteHandle=(id)=>{
      console.log("test"+id);
      console.log(urlData);
      let newData = urlData.filter((item)=>item.id!==id);
      seturlData(newData);
      console.log(newData);
    }

    useEffect(()=>{
        getData();
    },[])
    // getData();
    return (
        <div>
            <button onClick={postData}>create Post</button>
            {
                urlData.map((item)=>{
                    return(
                        <div key={item.id}>
                            <button onClick={()=>{deleteHandle(item.id)}}>Delete</button>
                            <h1>{item.id}</h1>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )

    
}

export default AxiosTest
