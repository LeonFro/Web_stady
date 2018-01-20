import React, { Component } from 'react';

export default class Items extends Component {
    render() {
      return (
        <div className="row">
        <div class="col-md-6 col-md-offset-3">
          <div>
          <input type="text"/> <button className="btn btn-info">Add Item</button>
            <ul class="list-group">
              <li class="list-group-item">Audi</li>
              <li class="list-group-item">Toyota</li>
              <li class="list-group-item">Orange</li>
              <li class="list-group-item">Apple</li>
            </ul>
          </div>
        </div>
      </div>
      );
    }
}
