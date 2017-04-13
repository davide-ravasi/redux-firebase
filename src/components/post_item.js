import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
// import copyButton from './copy-button';
import CopyToClipboard from 'react-copy-to-clipboard';

class PostItem extends Component {

  constructor(props) {
		super(props);
		this.state = {value: '', copied: false};
	}

  onCopy() {
    this.setState({copied: true});

    setTimeout(() => {
      console.log('start set time out');
      this.setState({copied: false});
    },1500);
  } 

  removeElement() {
   this.props.deletePost(this.props.id);
  }

  // retrieveElement() {
  //  this.props.retrievePost(this.props.id);
  // }
  // <button className="btn btn-primary btn-xs" onClick={this.retrieveElement.bind(this)}>M</button>

  render() {
    return (
      <div className="post-list" >
        <Link className="btn btn-primary btn-xs" to={'/modif/' + this.props.id}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </Link>
        <button className="btn btn-danger btn-xs" onClick={this.removeElement.bind(this)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <h4>{this.props.post.command} 
          <CopyToClipboard text={this.props.post.command} 
            onCopy={this.onCopy.bind(this)}>
            <i className="fa fa-clipboard"></i>
          </CopyToClipboard>
            <span className={"label label-success " + (this.state.copied ? 'active' : 'inactive')}>Copied</span>
        </h4>
        <p>{this.props.post.description}</p>
        <copyButton />        
      </div>     
    )
  }
}

export default connect(null, actions)(PostItem);