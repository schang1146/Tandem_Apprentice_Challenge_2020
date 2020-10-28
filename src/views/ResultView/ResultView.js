// import dependencies
import { Link } from 'react-router-dom';

function ResultView() {
    return (
        <div className='result-wrapper'>
            <h2>You scored 0/10!</h2>
            <Link to='/trivia'>
                <button>Retry</button>
            </Link>
            <Link to='/'>
                <button>Back to Home</button>
            </Link>
        </div>
    );
}

export default ResultView;
