import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Profile = (props) => {
    const { auth, profile } = props
    if (!auth.uid) return <Redirect to='/' />
    console.log(props)
    return (
        <div className="ml-5">
            <h1>Profile</h1>
            <h3>First Name: {profile.firstName}</h3>
            <h3>last Name:{profile.lastName}</h3>
            <h3>Initials: {profile.initials}</h3>
            <h3>Role: {profile.role}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile);