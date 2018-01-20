import React, { Component } from 'react';

export default class Types extends Component {
  render() {
    return (
      <div className="row">
        <div class="col-md-6 col-md-offset-3">
          <div>
            <input type="text"/> <button className="btn btn-info">Add Type</button>
            <ul class="list-group">
              <li class="list-group-item">Car</li>
              <li class="list-group-item">Fruit</li>
              <li class="list-group-item">People</li>
              <li class="list-group-item">Color</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
