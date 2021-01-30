// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebaseApp from '../../firebase';

// import styling
import './Navbar.scss';

function Navbar() {
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
            {isLoggedIn ? <button onClick={logout}>Logout</button> : <Link to='/auth'>Login</Link>}
        </div>
    );
}

export default Navbar;
