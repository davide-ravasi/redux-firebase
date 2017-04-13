import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PostItem from './post_item';
import { Accordion, Panel } from 'react-bootstrap';

class PostList extends Component {

  singleCommand(el) {
      return _.map(el, ( command, key ) => {
        return (
          <PostItem key={command.key} id={command.key} post={command} />
        )
      });
  }

  renderPosts() {    
    var ObjByCategory = _.chain(this.props.posts)
                      .forEach(function(value, key) {
                        value['key'] = key;
                      })
                      .groupBy('category')
                      .pairs()    
                      .map(function (currentItem) {
                        return _.object(_.zip(["type", "elements"], currentItem));
                      })
                      .value();


  return _.map(ObjByCategory, (post, key) => {
      //return <PostItem key={key} post={post} id={key} />
      return (
        /*<div  className="post-block" key={post.type}> 
          <h3>{post.type} ({post.elements.length})  <span>+</span></h3>
            {this.singleCommand(post.elements)}
        </div>*/
        <Panel header={post.type + ' (' + post.elements.length + ')'} eventKey={key} >
          {this.singleCommand(post.elements)}         
        </Panel>
      )
    });
  }

  render() {
    return (
      <Accordion>
        {this.renderPosts()}
      </Accordion>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, actions)(PostList);