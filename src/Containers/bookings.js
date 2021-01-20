import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from "react-router-dom";
import BookingList from '../Components/Bookings/bookingList';

class Bookings extends Component {
    render() {
        const { bookings, auth } = this.props
        if(!auth.uid) return <Redirect to='/login' />
        return (
            <div className="row">
                <div className="col-6 ml-5">
                    <BookingList bookings={bookings} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookings: state.firestore.ordered.bookings,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bookings' }
    ])
    )(Bookings);