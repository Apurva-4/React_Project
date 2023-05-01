/**import { render } from '@testing-library/react';
import React from 'react'
import dashBoard from './dashBoard.xml';
export default function Demo() {
  render();{
  return{
    rawFile = new XMLHttpRequest();
    rawFile.open("GET" ,dashBoard, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                
                  rawFile.send();
                 var xmlDoc=rawFile.responseText;
                console.log("<table border=1 width='50%' style='font-size:20px;'>");

                console.log("<tr><th>Sr</th><th>Year</th><th>Name</th><th>Marks</th><th>Grade</th></tr>");
        var x=xmlDoc.getElementsByTagName("Sr");
        var i;
        for(i=0;i<x.length;i++)
        {
            console.log(xmlDoc.getElementsByTagName("Sr")[i].childNodes[0].nodeValue);
            console.log("</td><td>");
            console.log(xmlDoc.getElementsByTagName("Year")[i].childNodes[0].nodeValue);
            console.log("</td><td>");
            console.log(xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue);
            console.log("</td><td>");
            console.log(xmlDoc.getElementsByTagName("Marks")[i].childNodes[0].nodeValue);
            console.log("</td><td>");
            console.log(xmlDoc.getElementsByTagName("Grade")[i].childNodes[0].nodeValue);
            console.log("</td></tr>");
            
        }
        console.log("</table>");
            }
        }
  
    }
    

  
}
    
}
}**/
