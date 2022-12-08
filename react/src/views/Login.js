import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }
  sendLoginInfo = async (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    
    const res = await fetch('http://127.0.0.1:5000/api/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const data = await res.json();
    if (data.status === 'ok') {
      this.props.addMessage(data.message, 'success')    // show message
      this.props.logMeIn(data.user)                     // log in
    } else if (data.status === 'not ok') {
      this.props.addMessage(data.message, 'danger')
    } 
    console.log(data)
  }
  
  sendBasicAuthInfo = async (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    
    const res = await fetch('http://127.0.0.1:5000/api/token', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Basic ${btoa(username+':'+password)}`
      }
    });
    const data = await res.json();
    if (data.status === 'ok') {
      this.props.addMessage(data.message, 'success')    // show message
      this.props.logMeIn(data.user)                     // log in
      this.setState({redirect: true})
    } else if (data.status === 'not ok') {
      this.props.addMessage(data.message, 'danger')
    } 
    console.log(data)
  }

  render() {
    console.log('rendering is about to happen')
    if (this.state.redirect) {
      return <Navigate to='/' />
    }
    return (
      <div className='signup'>
        <h1 className='boxes'>Log In</h1>
        <form onSubmit={(e)=>{ this.sendBasicAuthInfo(e) }}>
          <input placeholder='Username' name='username' className='form-control boxes' type='text' />
          <input placeholder='Password' name='password' className='form-control boxes' type='password' />
          <button type='submit' className='btn btn-success boxes'>Submit</button>
        </form>
      </div>
    )
  }
}