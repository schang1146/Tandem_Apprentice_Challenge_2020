// import dependencies
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import styling
import './App.css';

// import views
const LandingView = lazy(() => import('../../views/LandingView/LandingView'));
const TriviaView = lazy(() => import('../../views/TriviaView/TriviaView'));
const ResultView = lazy(() => import('../../views/ResultView/ResultView'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={LandingView} />
                    <Route path='/trivia' component={TriviaView} />
                    <Route path='/result' component={ResultView} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
