/**import React ,{Component}from 'react';
import Page from "./Dash.html"
var htmlDoc={__html:Page};

export default class Doc extends Component {
    constructor(props){
        super(props);
    }
    render(){
  return (
<div dangerouslySetInnerHTML={htmlDoc}/>
  )
}}**/




function fetchHtml() {
  fetch('./Dash.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.body.innerHTML = html     
  });
}
