import React, { Component } from 'react';
import axios from 'axios';
import { saveJWT } from '../../Redux/store/localStorage';
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false
    };


    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);

  }
  handleChange(event) {
    const name = event.target.name;

    this.setState({ [name]: event.target.value });
  }
  login(e) {
    e.preventDefault();
    
//    axios.post("https://david-gonzales-1.herokuapp.com/login", {
    axios.post("/login", {
      username: this.state.username,
      password: this.state.password
    }).then(response => {

      saveJWT(response.data)
      this.setState({ redirectToReferrer: true })

    }).catch(error => {
      throw (error);
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
    const { redirectToReferrer } = this.state

    //if we have token redirect
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <form className="form-horizontal col-md-offset-4 col-md-4" style={{ paddingTop: "20px", border: "1px solid black", marginTop: "60px" }}>
        <div className="form-group">
          <label className="col-md-4 control-label" >Email</label>
          <div className="col-md-8">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="username" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label">Password</label>
          <div className="col-md-8">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className=" col-md-12" >
            <button type="submit" className="btn btn-default  col-md-12" onClick={this.login} >Sign in</button>
          </div>
        </div>

      </form>
    );
  }
}



export default Login;