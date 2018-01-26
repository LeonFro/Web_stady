import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Types from './pages/Types'
import Items from './pages/Items'
import Home from './pages/Home'
import Toolbar from "./components/Toolbar"
import NotFound from "./pages/NotFound"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     dataTypes: [
        {
            "id":1,
            "type":"A"
            
        },
        {
            "id":2,
            "type":"B"
            
        }
    ],
  dataItems:[]
}

}

  onSave = (id, valueType) => {
    let dataType = this.state.dataTypes.map(x => {
      if (x.id === id) {
        x.type = valueType;
      }
      return x;
    })
    this.setState({ dataType });
  }

  onDelete = id => {

  }

  onAddType=type=>{
    let dataType={
      id:Date.now(),
      type:type
    };
    let dataTypes = [...this.state.dataTypes, dataType];
    this.setState({dataTypes})
  }

  onAddItem=(item,type)=>{
let dataItem ={
  id: Date.now(),
  item:item,
  type:type 
};
let dataItems = [...this.state.dataItems, dataItem];
this.setState({dataItems})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <div>
            <Switch>
              <Route exact path={`/`} render={() => (
                <Home />
              )} />
              <Route path={`/Types`} render={props => (
                <Types 
                typeData={this.state.dataTypes} 
                sType={this.onSave}
                tDelet={this.onDelete}
                onAdd={this.onAddType}
                {...props}/>
              )} />
              <Route path={`/Items`} render={props => (
                <Items 
                typeData={this.state.dataTypes}
                itemsData={this.state.dataItems}
                onAddi={this.onAddItem}
                {...props}/>
              )} />
              <Route render={() => (
                <NotFound />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


