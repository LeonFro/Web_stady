import React, { Component } from 'react';
import Form from "../components/Form";
import Select from "../components/Select";
import ListItem from "../components/ListItem";

export default class Items extends Component {
  constructor(props){
    super(props);
this.state={
  value:props.typeData[0].id,
  item:""}
  }

  onSelect=event=>{
    let value = event.target.value;
    this.setState({value});
    event.preventDefault();
  }

  addItem=event=>{ //добавляем item
    event.preventDefault();
    let item = this.state.item;
    let typeId = this.state.value;
    if(item){
      this.props.onAddi(item,typeId);
      this.setState({item:''})
    }
  }

  thatChange=event=>{ // Функция добавляения 
    let item = event.target.value;
    this.setState({item});
}
  
    render() {
      return (
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div>
          <form className="form-inline" onSubmit={this.addItem}>
           <div className="form-control-fuid">
               <h3 className="form-control-static cooli">Items</h3>   
               <Form value={this.state.item} onChange={this.thatChange}/>
           <select className="form-control" onChange={this.onSelect}>

             {this.props.typeData.map(type=>
             (<Select typeData={type} 
             key={type.id} 
             value={type.id}/>))}

            </select>
             </div>  
           </form>
             <ul className="list-group">

              {this.props.itemsData.map(item=>
              (<ListItem resultItem={item} key={item.id}
                resultType={this.props.typeData.find(x=>x.id===item.typeId)}/>))}

            </ul> 
          </div>
        </div>
      </div>
      );
    }
}
