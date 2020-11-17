import React, { Component } from 'react';

import fire from '../config/fire';
import Login from '../Login/Login'
import Log from '../HomeLog/Log';
class CTA extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener()
  {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render(){
    return (
        <div className="App">
          {this.state.user ? (<Log />) : (<Login />)}
        </div>
    );
  }
}

export default CTA;