import React, { Component } from 'react'
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Chart from './views/Chart';
import CigarDB from './views/CigarDB';
import SingleCigar from './views/SingleCigar';
import API from './views/API';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      confirmPw: '',
      message: {}
    };
    console.log('construction is done')
  }

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  };

  componentDidMount = () => {
    console.log('first rendering is complete')
  };

  render() {
    console.log('rendering is about to happen')
    return (

      <Router>
        <Routes>
          <Route path='/api' element={<API />} />
        </Routes>
        <div>
          <Nav />
          <p className={`messages bg-${this.state.message.category}`}>{this.state.message.message}</p>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup addMessage={this.addMessage} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cigardb' element={<CigarDB />} />
            <Route path='/cigardb/:cigarId' element={<SingleCigar />} />
            <Route path='/chart' element={<Chart />} />

          </Routes>

          <Footer />
        </div>
      </Router>
    )
  }
}
