import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import firebase from 'firebase';
import { login, logout, isConnected } from '../actions/index';

class MenuTop extends Component {
  constructor(props) {
    super(props);

    this.state = {loginMessage: null,isLogged: false};
  }

  static contextTypes = {
      router: PropTypes.object
  };

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

    handleLogout = (e) => {
        e.preventDefault();
        logout()
    }

    render() {
        // check connection state to change login button
        let linkLog;
        let newPost;
        console.log('state logged : ' , this.state.isLogged);
        if(this.state.isLogged) {
            linkLog = (
                <li><button  className="btn btn-warning" onClick={this.handleLogout}>Logout</button></li>
            )
            newPost = (
                <li><Link to="/create">New</Link></li>
            )
        } else {
            linkLog = (
                <li><Link to="/login">Login</Link></li>
            )   
            newPost = ""         
        }

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Git Library</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {newPost}
                        { linkLog }
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(null, actions)(MenuTop);