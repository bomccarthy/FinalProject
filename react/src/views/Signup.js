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
      return
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
    console.log(data)
  }
  

  render() {
    console.log('rendering is about to happen')
    return (
      <div className=''>
        <h1>Sign Up</h1>
        <form onSubmit={(e)=>{ this.sendSignUpInfo(e) }}>
          <input placeholder='First Name' name='fname' className='form-control' type='text' />
          <input placeholder='Last Name' name='lname' className='form-control' type='text' />
          <input placeholder='Email' name='email' className='form-control' type='email' />
          <input placeholder='Username' name='username' className='form-control' type='text' />
          <input placeholder='Password' name='password' className='' type='password' />
          <input placeholder='Confirm Password' name='cnfmPswd' className='' type='password' />
          <button type='submit' className='btn btn-primary'>submit</button>
        </form>
      </div>
    )
  }
}