// import dependencies
import { Link } from 'react-router-dom';

// import styling
import './LandingView.scss';

function LandingView() {
    return (
        <div className='landing-wrapper'>
            <header className='landing-header'>
                <div className='landing-top'>
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
