import React, { Component } from 'react'

export default class Signup extends Component {
  
  sendSignUpInfo = async (e) => {
    e.preventDefault();
    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const email = e.target.email.value
    const username = e.target.username.value
    const password = e.target.password.value
    const cnfmPswd = e.target.cnfmPswd.value
    if (password !== cnfmPswd) {
      console.log('Password and CnfmPswd do not match.')
      return this.props.addMessage('Password and Confirm Password do not match.', 'danger')
    }
    const res = await fetch('http://localhost:5000/api/signup', {
      method: "POST",
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const data = await res.json();
    if (data.status === 'ok') {
      this.props.addMessage(data.message, 'success')    // redirect and show message
    } else if (data.status === 'not ok') {
      this.props.addMessage(data.message, 'danger')
    } 
    console.log(data)
  }
  

  render() {
    console.log('rendering is about to happen')
    return (
      <div className='signup'>
        <h1 className='boxes'>Sign Up</h1>
        <form onSubmit={(e)=>{ this.sendSignUpInfo(e) }}>
          <input placeholder='First Name' name='fname' className='form-control boxes' type='text' />
          <input placeholder='Last Name' name='lname' className='form-control boxes' type='text' />
          <input placeholder='Email' name='email' className='form-control boxes' type='email' />
          <input placeholder='Username' name='username' className='form-control boxes' type='text' />
          <input placeholder='Password' name='password' className='form-control boxes' type='password' />
          <input placeholder='Confirm Password' name='cnfmPswd' className='form-control boxes' type='password' />
          <button type='submit' className='btn btn-success boxes'>Submit</button>
        </form>
      </div>
    )
  }
}