import React from 'react';
import { Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">
                <Link className="nav-link" to="/">Habit Tracker</Link>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">all Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Note</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user">Create User</a>
                        </li>
                        </ul>
                    </div>                    
            </nav>
        </div>
    );
}

export default Navbar;

