import React from 'react'
import "./appu.css"

export default function Appu() {
   fetch("http://localhost:8080/api/json?pretty=true").then((data)=>{
    //console.log(data);
    return data.json();//converted to object
   }).then((objectData)=>{
    console.log(objectData.jobs[0].color);
    let tableData="";
    objectData.jobs.map((values)=>{
        tableData +=`<tr>
        <td scope="row">${values.color}</td>
        <td>${values.name}</td>
        <td><a href src="${values.url}">${values.url}</a></td>
        
      </tr>`;
    })
    document.getElementById("table_body")
    .innerHTML=tableData;
   })
    
   
   
   
   
   return (
    <div>
      <h1 className='text-center'>Jenkins Dashboard</h1>
       <center>
      <table className="table">
  <thead className='table-dark'>
    <tr>
      
      <th scope="col">color</th>
      <th scope="col">name</th>
      <th scope="col">url</th>
    </tr>
  </thead>
  <tbody id="table_body">
    
   
  </tbody>
</table>
</center>
    </div>
  )
}
