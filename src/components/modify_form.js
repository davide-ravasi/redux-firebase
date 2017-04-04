import React, { Component, PropTypes } from 'react';
import { reduxForm} from 'redux-form';
import { modifyPost } from '../actions/index';
import { retrievePost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
  
  componentDidMount() {
    this.props.retrievePost(this.props.params.postId);  
  }

  onSend(props) {
    this.props.modifyPost(props,this.props.params.postId)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { command , category, description, options }, handleSubmit } = this.props;
    console.log('this props post');
    console.log(this.props);

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
          <Link className="btn btn-danger" to="/">Cancel</Link>
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
},
state => ({ // mapStateToProps
  initialValues: state.post // will pull state into form's initialValues
})
, { modifyPost, retrievePost })(PostsNew);


