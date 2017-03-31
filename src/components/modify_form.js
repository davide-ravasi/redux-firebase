import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { retrievePost } from '../actions/index';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
  
  componentWillMount() {
    this.props.retrievePost(this.props.params.postId);    
  }


  onSend(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push with the
        // new path naviagte to
        // PUSH is a method of redux router
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { command , category, description, options }, handleSubmit } = this.props;


    return (
        <form onSubmit={ handleSubmit(this.onSend.bind(this)) }> 
          <h3>Modify post with id {this.props.params.postId}</h3>
          <div className="form-group">
            <label>Command</label>
            <input type="text" className="form-control" {...command} />          
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" {...category} />          
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" {...description} />          
          </div>

          <div className="form-group">
            <label>Options</label>
            <textarea className="form-control" {...options} />          
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['command','category','description','options']
}, mapStateToProps, { createPost, retrievePost })(PostsNew);


