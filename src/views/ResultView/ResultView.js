// import dependencies
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function ResultView() {
    const history = useHistory();

    return (
        <div className='result-wrapper'>
            <h2>You scored {history.location.state.score}/10!</h2>
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
