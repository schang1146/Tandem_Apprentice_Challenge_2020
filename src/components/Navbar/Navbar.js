// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebaseApp from '../../firebase';

// import styling
import './Navbar.scss';

function Navbar({ toggleAuthModal }) {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

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
                    <button onClick={toggleAuthModal}>Login</button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
