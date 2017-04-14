import React, { Component } from 'react';
import { Link } from 'react-router';
import { login } from '../actions/index';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {loginMessage: null};
  }

  setErrorMsg(error) {
    return {
      loginMessage: error
    }
  }

 handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
      .catch((error) => {
        this.setState(this.setErrorMsg(error.message))
    });
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <button type="submit" className="btn btn-primary">Login</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    )
  }
}