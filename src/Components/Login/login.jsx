import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from '../../Actions/authAction'
import { Redirect } from "react-router-dom";

class Login extends Component{
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return(
            <React.Fragment>
                <div className="row justify-content-around mt-3" style={{height: "300px", width: "100vw" }}>
                    <form className="col-4" onSubmit={ this.handleSubmit } >
                        <h1>Log In</h1>
                        <div className="text-danger" >
                            { authError ? <p>{authError}</p> : null }
                        </div>
                        <input type="text" className="form-control" id="email" onChange={ this.handleChange } placeholder="Email" />
                        <input type="text" className="form-control mt-3" id="password" onChange={ this.handleChange } placeholder="Password" />
                        <button className="btn btn-outline-primary mt-3" >Log In</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);