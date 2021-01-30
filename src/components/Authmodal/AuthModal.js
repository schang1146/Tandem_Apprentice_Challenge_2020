import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './AuthModal.scss';

const uiConfig = {
    // popup signin flow rather than redirect flow
    signInFlow: 'popup',
    // redirect to /trivia after sign in is successful
    signInSuccessUrl: '/',
    // auth providers
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

function AuthModal() {
    return (
        <div className='authmodal-wrapper'>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
        </div>
    );
}

export default AuthModal;
