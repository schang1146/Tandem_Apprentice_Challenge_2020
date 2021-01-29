import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
    messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `G-${process.env.REACT_APP_MEASUREMENT_ID}`,
};
console.log(process.env);
console.log(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const uiConfig = {
    // popup signin flow rather than redirect flow
    signInFlow: 'popup',
    // redirect to /trivia after sign in is successful
    signInSuccessUrl: '/trivia',
    // auth providers
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

function AuthView() {
    return (
        <div className='auth-wrapper'>
            Welcome to the AuthView!
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
        </div>
    );
}

export default AuthView;
