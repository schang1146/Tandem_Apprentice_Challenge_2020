// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebaseApp from '../../firebase';

// import components
import AuthModal from '../AuthModal/AuthModal';

// import styling
import './Navbar.scss';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

    const showAuthModal = () => setIsAuthModalVisible(true);
    const closeAuthModal = () => setIsAuthModalVisible(false);

    firebaseApp.auth().onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    });

    const logout = () => {
        firebaseApp.auth().signOut();
    };

    return (
        <>
            <div className='navbar-wrapper'>
                <div className='navbar-left'>
                    <Link to='/'>Home</Link>
                    <Link to='/trivia'>Trivia</Link>
                    <Link to='/leaderboards'>Leaderboards</Link>
                </div>
                <div className='navbar-right'>
                    <span style={{ marginRight: '2rem' }}>
                        {firebaseApp.auth().currentUser !== null &&
                            firebaseApp.auth().currentUser.displayName}
                    </span>
                    {isLoggedIn ? (
                        <button onClick={logout}>Logout</button>
                    ) : (
                        <button onClick={showAuthModal}>Login</button>
                    )}
                </div>
            </div>
            <AuthModal isAuthModalVisible={isAuthModalVisible} closeAuthModal={closeAuthModal} />
        </>
    );
}

export default Navbar;
