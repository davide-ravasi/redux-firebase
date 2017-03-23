import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { command, category, description, options }, handleSubmit } = this.props;
    return (
        <form onSubmit={ handleSubmit(this.props.createPost)}> 
          <h3>create new post</h3>
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

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['command','category','description','options']
}, null, { createPost })(PostsNew);


