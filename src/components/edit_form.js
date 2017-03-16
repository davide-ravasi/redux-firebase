import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EditForm extends Component {

  state = { post: '' };

  handleInputChange(event) {
    this.setState({ post: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createPost(this.state.post)
  }

  render() {
      return (
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline formProv">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a post"
              value={this.state.post}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Post</button>
          </div>
        </form>
      );
  }
}

export default connect(null, actions)(EditForm);


