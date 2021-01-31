// import dependencies
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// import components
import Layout from '../../components/Layout/Layout';

// import styling
import './ResultView.scss';

function ResultView() {
    const history = useHistory();
    const titles = {
        '-1': 'How...?',
        0: 'Trivia Newcomer',
        1: 'Trivia Novice',
        2: 'Trivia Beginner',
        3: 'Trivia Dabbler',
        4: 'Trivia Amateur',
        5: 'Trivia Regular',
        6: 'Trivia Expert',
        7: 'Trivia Wizard',
        8: 'Trivia Master',
        9: 'Trivia Guru',
        10: 'Trivia Grandmaster',
        11: 'Cheater!',
    };
    return (
        <Layout style={{ background: `linear-gradient(to bottom, #ffd4c0 80%, #ffffff 20%)` }}>
            <div className='result-wrapper'>
                <h2 className='result-score'>You scored {history.location.state.score}/10!</h2>
                <h3 className='result-title'>Title: {titles[history.location.state.score]}</h3>
                <Link className='btn-retry' to='/trivia'>
                    Retry
                </Link>
                <Link className='btn-home' to='/'>
                    Back to Home
                </Link>
                <Link className='btn-home' to='/leaderboards'>
                    Leaderboards
                </Link>
            </div>
        </Layout>
    );
}

export default ResultView;
