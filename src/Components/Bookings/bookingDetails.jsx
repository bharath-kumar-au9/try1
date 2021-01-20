import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const BookingDetails = (props) => {
    const { booking, auth } = props;
    if(!auth.uid) return <Redirect to='/login' />
    if (booking) {
        return(
            <React.Fragment>
                <div className="ml-5 mt-3" >
                    <h5>From: {booking.departure}</h5>
                    <h5>To: {booking.destination}</h5>
                    <h5>Booking-ID: {booking.id}</h5>
                    <h5>User Name: {booking.user}</h5>
                    <h5>User-ID: {booking.userid}</h5>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <div className="justify-content-around" >
                <p>Loading....</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const bookings = state.firestore.data.bookings;
    const booking = bookings ? bookings[id] : null
    return {
        booking: booking,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'bookings'}
    ])
)(BookingDetails);