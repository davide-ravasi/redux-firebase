import React, { Component } from 'react';
import { Link } from 'react-router';
import { login } from '../actions/index';


export default class Login extends Component {

 handleSubmit = (e) => {
    e.preventDefault();
    login(this.email.value, this.pw.value)
    //   .catch((error) => {
    //       this.setState(setErrorMsg('Invalid username/password.'))
    // });
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
          <button type="submit" className="btn btn-primary">Login</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    )
  }
}