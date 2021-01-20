import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

const Header = (props) => {
    const { auth, profile } = props
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width: "100vw" }} >
            <Link to="/" className="navbar-brand ml-md-5" >Cool-Cab</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon" ></span>
            </button>
            { links }
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header);