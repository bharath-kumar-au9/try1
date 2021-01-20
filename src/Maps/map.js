import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBooking } from '../Actions/bookingActions'
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import configData from '../Config/config.json'

mapboxgl.accessToken = configData.mapboxToken

class Map extends Component{
    state={
        location: {
            departure: [77,28],
            destination: [77,28]
        },
        bookings: {}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.auth.uid) {
            return this.props.createBooking(this.state.bookings)
        }
        else {
            return <Redirect to='/login' />
        }
    }

    componentDidMount = () => {  
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v9",
            center: this.state.location.departure,
            zoom: 6
        })

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-right");
            
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions:{
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
        map.addControl(geolocate, "top-right");

        geolocate.on('geolocate', (e) => {
            map.flyTo({
                zoom: 14,
                center:[e.coords.longitude, e.coords.latitude]
            })
        })
        
        const departure = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'in'
        })

        departure.addTo('#departure')

        departure.setPlaceholder('Departue')

        departure.on('result', (e) => {
            this.setState(prevState => ({
                location: {
                    ...prevState.location,
                    departure: e.result.center
                },
                bookings: {
                    ...prevState.bookings,
                    departure: e.result.place_name,
                    userid: this.props.auth.uid,
                    user: this.props.profile.firstName
                }
            }))
            map.flyTo({
                zoom: 16,
                center: e.result.center
            })
            new mapboxgl.Marker({
            }).setLngLat(this.state.location.departure).addTo(map)
        })

        const destination = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            countries: 'in'
        })

        destination.addTo('#destination')

        destination.setPlaceholder('Destination')

        destination.on('result', (e) => {
            this.setState(prevState => ({
                location: {
                    ...prevState.location,
                    destination: e.result.center
                },
                bookings: {
                    ...prevState.bookings,
                    destination: e.result.place_name
                }
            }))
            map.flyTo({
                zoom: 11,
                center: e.result.center
            })
            new mapboxgl.Marker({
            }).setLngLat(this.state.location.destination).addTo(map)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div id="departure" className="" />
                <div id="destination" className="mt-5" />
                <button onClick={this.handleSubmit} className="btn btn-outline-dark mt-3" >Ride</button>
                <div id="map" className="mt-5" style={{height: "100%", width: "100%"}} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBooking: (booking) => dispatch(createBooking(booking))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);