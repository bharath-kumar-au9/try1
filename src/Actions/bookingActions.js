export const createBooking = (booking) => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('bookings').add({
            ...booking,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_BOOKING', payload: booking})
        }).catch((error) => {
            dispatch({ type: 'CREATE_BOOKING_ERROR', error })
        })
    }
}