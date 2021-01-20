import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-md-5">
                <li className="nav-item">
                    <Link className="nav-link my-2 my-sm-0 m-1" to="/login" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-outline-primary" to="/signup" >Sign Up</Link>
                </li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;