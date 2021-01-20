import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from '../../Actions/authAction'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'User'
    }

    handleChange = (e) => {
        this.setState(prevState => ({
                ...prevState,
                [e.target.id]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
    }

    render(){
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <React.Fragment>
                <div className="row justify-content-around mt-3" style={{height: "80vh", width: "100vw" }}>
                    <form onSubmit={this.handleSubmit} className="col-4" >
                        <h1>Sign Up</h1>
                        <div className="text-danger" >
                            { authError ? <p>{authError}</p> : null }
                        </div>
                        <input type="text" onChange={this.handleChange} className="form-control" id="firstName" placeholder="First Name" />
                        <input type="text" onChange={this.handleChange} className="form-control mt-3" id="lastName" placeholder="Last Name" />
                        <input type="email" onChange={this.handleChange} className="form-control mt-3" id="email" placeholder="Email" />
                        <input type="password" onChange={this.handleChange} className="form-control mt-3" id="password" placeholder="Password" />
                        {/* <input type="passwo" onChange={this.handleChange} className="form-control mt-3" id="confirmPassword" placeholder="Confirm Password" /> */}
                        <button className="btn btn-outline-primary mt-3" >Sign Up</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup: (newUser) => dispatch(signup(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);