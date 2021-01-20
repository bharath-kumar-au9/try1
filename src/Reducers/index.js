import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer'
import bookingsReducer from './bookingsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    booking: bookingsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;