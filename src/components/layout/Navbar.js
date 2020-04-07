import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Start React in iXora</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/posts">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/">Disabled</Link>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar;