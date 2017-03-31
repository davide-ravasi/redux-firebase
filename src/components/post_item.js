import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class PostItem extends Component {
  removeElement() {
   this.props.deletePost(this.props.id);
  }

  retrieveElement() {
   this.props.retrievePost(this.props.id);
  }

  render() {
    return (
      <div className="post-list" >
        <button className="btn btn-primary btn-xs" onClick={this.retrieveElement.bind(this)}>M</button>
        <Link className="btn btn-primary btn-xs" to={'/modif/' + this.props.id}>M</Link>
        <button className="btn btn-danger btn-xs" onClick={this.removeElement.bind(this)}>X</button>
        <h4>{this.props.post.command}</h4>
        <p>{this.props.post.description}</p>
      </div>     
    )
  }
}

export default connect(null, actions)(PostItem);