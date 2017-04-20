import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
// import copyButton from './copy-button';
import CopyToClipboard from 'react-copy-to-clipboard';
import firebase from 'firebase';

class PostItem extends Component {

  constructor(props) {
		super(props);
		this.state = {value: '', copied: false ,isLogged: false};
	}

  componentWillMount() {
      firebase.auth().onAuthStateChanged( user => {
          if (user) {
              console.log('connected');
              this.setState({isLogged: true})
          } else {
              console.log('not connected');
              this.setState({isLogged: false})
          }
      })
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
    let modBtn;
    let eraseBtn;
    if(this.state.isLogged) {
        modBtn = (     
        <button className="btn btn-danger btn-xs" onClick={this.removeElement.bind(this)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        )
        eraseBtn = (        
          <Link className="btn btn-primary btn-xs" to={'/modif/' + this.props.id}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
        )
    } else {
        modBtn = "";
        eraseBtn = "";
    }
    return (
      <div className="post-list" >
        <h4>{this.props.post.command} 
          <CopyToClipboard text={this.props.post.command} 
            onCopy={this.onCopy.bind(this)}>
            <i className="fa fa-clipboard"></i>
          </CopyToClipboard>
            <span className={"label label-success " + (this.state.copied ? 'active' : 'inactive')}>Copied</span>
        </h4>
        {modBtn}
        {eraseBtn}
        <p>{this.props.post.description}</p>
        <copyButton />        
      </div>     
    )
  }
}

export default connect(null, actions)(PostItem);