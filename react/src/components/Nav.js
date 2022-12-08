import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/images/logo.png';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className='logo-width' alt='Cdb Logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            {!this.props.user.username?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/login">Login</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/cigardb">Database</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/api">API</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/filter">Filter</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/chart">Chart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active nav-font-size" aria-current="page" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                                </li>
                                <li className="nav-item ml-auto">
                                    <p className="nav-link active nav-font-size" aria-current="page" to="/chart">Cigar DB User: {this.props.user.fname} {this.props.user.lname}</p>
                                </li>
                            </>}
                        </ul>
                        {/* <form className="d-flex justify-content-right" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        )
    }
}
