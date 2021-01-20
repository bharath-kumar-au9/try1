import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import BookingDetails from '../Components/Bookings/bookingDetails';
import CreateBooking from "../Components/Bookings/createBooking";
import Header from '../Components/Layout/header';
import Bookings from "../Containers/bookings";
import Login from '../Components/Login/login';
import SignUp from '../Components/Login/signUp';
import Profile from '../Components/Login/profile';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Route exact path='/' component={CreateBooking} />
            <Route path='/bookings' component={Bookings} />
            <Route path='/booking/:id' component={BookingDetails} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={Profile} />
        </BrowserRouter>
    )
}

export default Routes;