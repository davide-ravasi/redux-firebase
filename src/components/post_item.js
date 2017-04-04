import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class PostItem extends Component {
  removeElement() {
   this.props.deletePost(this.props.id);
  }

  // retrieveElement() {
  //  this.props.retrievePost(this.props.id);
  // }
  // <button className="btn btn-primary btn-xs" onClick={this.retrieveElement.bind(this)}>M</button>

  render() {
    return (
      <div className="post-list" >
        <Link className="btn btn-primary btn-xs" to={'/modif/' + this.props.id}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </Link>
        <button className="btn btn-danger btn-xs" onClick={this.removeElement.bind(this)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <h4>{this.props.post.command}</h4>
        <p>{this.props.post.description}</p>
      </div>     
    )
  }
}

export default connect(null, actions)(PostItem);