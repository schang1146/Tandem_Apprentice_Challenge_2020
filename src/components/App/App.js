// import dependencies
import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import AuthModal from '../AuthModal/AuthModal';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// import views
const LandingView = lazy(() => import('../../views/LandingView/LandingView'));
const TriviaView = lazy(() => import('../../views/TriviaView/TriviaView'));
const ResultView = lazy(() => import('../../views/ResultView/ResultView'));

function App() {
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

    const toggleAuthModal = () => {
        if (isAuthModalVisible) {
            setIsAuthModalVisible(false);
        } else {
            setIsAuthModalVisible(true);
        }
    };

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar toggleAuthModal={toggleAuthModal} />
                {isAuthModalVisible && <AuthModal />}
                <Switch>
                    <Route exact path='/' component={LandingView} />
                    <Route path='/trivia' component={TriviaView} />
                    <Route path='/result' component={ResultView} />
                </Switch>
                <Footer />
            </Suspense>
        </Router>
    );
}

export default App;
