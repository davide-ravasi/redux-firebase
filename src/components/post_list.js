import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {
  render() {
    return (
      <div>post list</div>
    );
  }
}

export default connect(null, actions)(PostList);