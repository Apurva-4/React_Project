import React, { useState } from 'react'
import axios from 'axios'

export default function App1() {
    const [data,setData]=useState()
    
    const fetchData=()=>{
        axios.get("http://localhost:8080/api/json?pretty=true")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    }
    return (
    <>
      <h1>hello</h1>
      <button onClick={fetchData}>fetchdata</button>
      {
    console.log(data)
      }
    </>
  )
}
