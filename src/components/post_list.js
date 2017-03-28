import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {

  singleCommand(el) {
       console.log(el);
       return _.map(el, ( command, key ) => {
         return (
           <div className="post-list">
             <h4>{command.command}</h4>
             <p>{command.description}</p>
           </div>
         )
       });
  }

  renderPosts() {
    var ObjByCategory = _.chain(this.props.posts)
                          .groupBy('category')
                          .pairs()    
                          .map(function (currentItem) {
                              return _.object(_.zip(["type", "elements"], currentItem));
                          })
                          .value();

  return _.map(ObjByCategory, (post, key) => {
      //return <PostItem key={key} post={post} id={key} />
      return (
        <div  className="post-block"> 
          <h3>{post.type}</h3>
            {this.singleCommand(post.elements)}
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