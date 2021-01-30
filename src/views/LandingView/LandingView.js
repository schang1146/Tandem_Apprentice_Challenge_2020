// import dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebaseApp from '../../firebase';

// import styling
import './LandingView.scss';

function LandingView() {
    const [user, setUser] = useState(null);

    firebaseApp.auth().onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            setUser(firebaseUser);
        } else {
            setUser(null);
        }
    });

    return (
        <div className='landing-wrapper'>
            <header className='landing-header'>
                <div className='landing-top'>
                    {user && `Welcome ${user.displayName}!`}
                    <h1 className='landing-logo'>tandem for 400!</h1>
                    <h2 className='landing-title'>Build your Trivia muscles!</h2>
                </div>
                <div className='landing-bot'>
                    <Link className='btn-start' to='/trivia'>
                        Start
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default LandingView;
