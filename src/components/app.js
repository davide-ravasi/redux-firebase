import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MenuTop from  './menu_top';
import PostItem from './post_item';
import EditForm from './edit_form';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      console.log('--------------------');
      console.log(post);
      //return <PostItem key={key} post={post} id={key} />
      //return <PostItem key={key} post={post} id={key} />
    });
  }

  render() {
    return (
      <div>
        <MenuTop />
        <div className="container" role="Main">
          <div className="page-header">
            <h1>Command list</h1>
          </div>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
        <EditForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, actions)(App)
