import React from "react";
import { Link } from 'react-router-dom'

const BookingList = ({bookings}) => {
    return (
        <div>
            { bookings && bookings.map(booking => {
                return (
                    <Link to={'/booking/' + booking.id } key={booking.id} >
                        <div className="mt-3" >
                            <h5>{booking.id}</h5>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default BookingList;