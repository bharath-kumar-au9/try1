import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from '../Config/firebaseConfig';
import rootReducer from "../Reducers/index";

const store = createStore( rootReducer, 
    compose(
        applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore }), logger ),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
    )
);

export default store;