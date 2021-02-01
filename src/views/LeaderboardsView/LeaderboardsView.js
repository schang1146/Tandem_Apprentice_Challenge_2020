// import dependencies
import { useEffect, useState } from 'react';
import firebaseApp from '../../firebase';
import 'firebase/auth';
import 'firebase/database';

// import components
import Layout from '../../components/Layout/Layout';

// import styling

const db = firebaseApp.database();
const scoresRef = db.ref('scores');

function LeaderboardsView() {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        scoresRef.on('value', (snap) => {
            let newScores = [];
            let dbScores;
            dbScores = snap.val();
            for (let key in dbScores) {
                newScores.push(dbScores[key]);
            }
            newScores.sort((a, b) => b.score - a.score);
            setScores(newScores);
        });
    }, []);

    return (
        <Layout style={{ background: `linear-gradient(to bottom, #ffd4c0 80%, #ffffff 20%)` }}>
            <div className='leaderboards-wrapper'>
                <h2>Leaderboards:</h2>
                <ol>
                    {scores.map((scoreObj, idx) => {
                        return (
                            <li key={idx}>
                                {idx + 1}. {scoreObj.score} - {scoreObj.name}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </Layout>
    );
}

export default LeaderboardsView;
