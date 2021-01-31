import Modal from 'react-bootstrap/Modal';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './AuthModal.module.scss';

// const ui = new firebaseui.auth.AuthUI(firebaseApp.auth());
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

function AuthModal({ isAuthModalVisible, closeAuthModal }) {
    return (
        <Modal show={isAuthModalVisible} onHide={closeAuthModal}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />}
            </Modal.Body>
        </Modal>
    );
}

export default AuthModal;
