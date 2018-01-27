import React, { Component } from 'react';

export default class Select extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {typeData} = this.props
    return(
        <option value={typeData.id}>{typeData.type}</option>
    )
}
}

