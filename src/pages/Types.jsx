import React, { Component } from 'react';
import Form from "../components/Form";
import ListTypes from "../components/ListType";


export default class Types extends Component {
  constructor(props){
    super(props);  
    this.state={
      type:" "}
  }

   addType=event=>{
    event.preventDefault();
    let type = this.state.type;
    if(type){
      this.props.onAdd(type);
      this.setState({type:''})
    }
  }

  thisChange=event=>{
    let type = event.target.value;
    this.setState({type})
}

  render() {
    return (
      <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div>
        <form className="form-inline" onSubmit={this.addType}>
         <div className="form-control-static">
             <h3 className="form-control-static cool">Types</h3>
             </div>   
         <Form value={this.state.type} onChange={this.thisChange}/>
         </form>
          <ul className="list-group">
            {this.props.typeData.map(type=>
            (<ListTypes 
            key={type.id}
            typeData={type}
            onSave={this.props.sType}
            deletForm={this.props.tDelet}
            />))}
          </ul> 
        </div>
      </div>
    </div>
    );
  }
}
