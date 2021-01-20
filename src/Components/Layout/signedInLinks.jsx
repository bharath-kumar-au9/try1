import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../Actions/authAction";

const SignedInLinks = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-md-5 ">
                <li className="nav-item">
                    <Link className="nav-link" to="/bookings">Bookings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link avatar-text avatar-text-inv-sun" to="/profile">
                        {props.profile.initials}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-danger ml-2" to="/" onClick={props.logout} >Logout</Link>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);