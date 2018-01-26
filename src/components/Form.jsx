import React,{Component,Fragment} from 'react';

export default class Form extends Component{
constructor(props){
    super(props);
}

render(){
    return(
        <Fragment>
            <div className="form-group">
                <input type="text"
                 className="form-control"
                  onChange={this.props.onChange}
                  placeholder="Add text" value={this.props.value} {...this.props}/>
            </div>
            <button type="submit" className="btn btn-default">Add</button>
        </Fragment>
    )}
};


