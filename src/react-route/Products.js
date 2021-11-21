import React from 'react'
import {data} from './data'
import {Link} from "react-router-dom"
function Products() {
    console.log(data)
    return (
        <div>
                {
                    data.map((item)=>{
                        return(
                            <div key={item.id}>
                                <p>{item.id}</p>
                                <p>{item.title}</p>
                                <Link to={`/art/${item.id}`}>More Info</Link>
                                <img src={item.image} alt={item.title}/>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Products
