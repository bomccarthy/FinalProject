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
import Filter from './views/Filter';
import About from './views/About';

export default class App extends Component {
  constructor() {
    super();
    const foundUser = localStorage.getItem('user')
    if (foundUser){
      this.state = {
        user: JSON.parse(foundUser),
        name: 'Shoha',
        age: 9001,
        message: {},
        cart: []
        }
    }
    else{
      this.state = {
        user: {},
        name: 'Shoha',
        age: 9001,
        message: {},
        cart: []
        }
    }
    console.log('construction is done')
  };

  logMeIn = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({
      user: user
    })
  };

  logMeOut = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem('user')
  }

  removeMessage = () => {
    this.setState({message: {}})
  };

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
    setTimeout(() => this.removeMessage(), 5000);
  };

  componentDidMount = () => {
    console.log('first rendering is complete')
  };

  render() {
    console.log('rendering is about to happen')
    return (

      <Router>
        <div>
          <Nav user={this.state.user} logMeOut={this.logMeOut} />
          <p className={`messages bg-${this.state.message.category}`}>{this.state.message.message}</p>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup addMessage={this.addMessage} />} />
            <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage} />} />
            <Route path='/cigardb' element={<CigarDB />} />
            <Route path='/cigardb/:cigarId' element={<SingleCigar />} />
            <Route path='/api' element={<API />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/about' element={<About />} />
            <Route path='/chart' element={<Chart />} />

          </Routes>

          <Footer />
        </div>
      </Router>
    )
  }
}
