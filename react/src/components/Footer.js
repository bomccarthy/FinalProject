import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="navbar navbar-expand-lg navbar-dark fixed-bottom bg-dark">
                <div className="container-fluid justify-content-end">
                    <div className="navbar-nav">
                        <Link className="nav-link active mx-2" to="/">Cigar DB</Link>
                        <Link className="nav-link active mx-2" to="mailto:sysrock@gmail.com">Contact</Link>
                        <Link className="nav-link active mx-2" to="/about">About</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
