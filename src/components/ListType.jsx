import React, { Component } from "react";

export default class ListType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            type: props.typeData.type
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEdit) {
            this.refs.type.select(); //при входе в режим редактирования, текс поля подсвечивается 
        }
    }

    // formChange = () => {
    //     let value =this.props.typeData.type
    //  this.setState({value})
    // }


    saveForm = event => {
        this.setState({ isEdit: false })
        let valueType = this.refs.type.value;
        this.props.onSave(this.props.typeData.id, valueType)
    };

    renderOnEdit() {
        return (
            <li className="list-group-item list-group-item-warning">
                <form className="form-inline" onChange={this.formChange}>

                    <input type="text" className="form-control"
                        placeholder="Add type" ref="type"
                        defaultValue={this.props.typeData.type} />

                    <button className="btn btn-danger pull-right" onClick={() => this.deletForm(this.props.id)}>Delete</button>
                    <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: false })}>Cancel</button>
                    <button className="btn btn-warning pull-right" onClick={this.saveForm}>Save</button>

                </form>
            </li>
        )
    }
    rendrerOffEdit() {
        return (
            <li className="list-group-item list-group-item-warning">
                <div className="container-fluid">
                    {this.props.typeData.type}
                    <button className="btn btn-success pull-right" onClick={() => this.setState({ isEdit: true })}>Edit</button>
                </div>
            </li>
        )
    }
    render() {
        return this.state.isEdit ? this.renderOnEdit() : this.rendrerOffEdit();
    }
}
