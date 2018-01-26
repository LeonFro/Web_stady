import React, { Component } from 'react';

export default class Select extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <option value={this.props.typeData.id}>{this.props.typeData.type}</option>
    )
}
}

