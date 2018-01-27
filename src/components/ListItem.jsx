import React, { Component }  from "react";

export default class ListItem extends Component{
    constructor(props){
        super(props);}

render(){
    return(
        <li className="list-group-item list-group-item-warning">
        <div className="form-group">
            <p>Type: {this.props.resultType.type}</p> 
            <p>Item:{this.props.resultItem.item}</p>
        </div>
       </li>
   )} ;
}