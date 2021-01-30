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

    const toggleAuthModal = () => {
        setIsAuthModalVisible(true);
    };

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
                <Link to='/'>Home</Link>
                <Link to='/trivia'>Trivia</Link>
                <Link to='/leaderboards'>Leaderboards</Link>
            </div>
            <div className='navbar-right'>
                {isLoggedIn ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={toggleAuthModal}>Login</button>
                )}
                {isAuthModalVisible && <AuthModal />}
            </div>
        </div>
    );
}

export default Navbar;
