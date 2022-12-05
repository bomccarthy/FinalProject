import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cigar DB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cigardb">Database</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/api">API</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/chart">Chart</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-right" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
