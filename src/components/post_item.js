import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

/*class PostItem extends Component {
  handleClick() {
    this.props.deletePost(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.post}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}*/

class PostItem extends Component {
  removeElement() {
   this.props.deletePost(this.props.id);
  }

  render() {
    return (
      <div className="post-list" >
        <button className="btn btn-danger" onClick={this.removeElement.bind(this)}>X</button>
        <h4>{this.props.post.command}</h4>
        <p>{this.props.post.description}</p>
      </div>     
    )
  }
}

export default connect(null, actions)(PostItem);