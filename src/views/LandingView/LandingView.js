// import dependencies
import { Link } from 'react-router-dom';

function LandingView() {
    return (
        <div className='landing-wrapper'>
            <h1>Tandem for 400!</h1>
            <Link to='/trivia'>
                <button>Start</button>
            </Link>
        </div>
    );
}

export default LandingView;
