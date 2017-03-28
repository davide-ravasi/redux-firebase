import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      console.log('--------------------');
      console.log(post);
      //return <PostItem key={key} post={post} id={key} />
      //return <PostItem key={key} post={post} id={key} />
      return (
        <div  className="post-list"> 
          <span className="label label-primary pull-right">{post.category}</span>
          <h4>{post.command}</h4>
          <p>{post.description}</p>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, actions)(PostList);