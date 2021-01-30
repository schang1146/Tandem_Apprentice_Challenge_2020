// import dependencies
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// import views
const LandingView = lazy(() => import('../../views/LandingView/LandingView'));
const TriviaView = lazy(() => import('../../views/TriviaView/TriviaView'));
const ResultView = lazy(() => import('../../views/ResultView/ResultView'));
const AuthView = lazy(() => import('../../views/AuthView/AuthView'));

function App() {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={LandingView} />
                    <Route path='/trivia' component={TriviaView} />
                    <Route path='/result' component={ResultView} />
                    <Route path='/auth' component={AuthView} />
                </Switch>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default App;
