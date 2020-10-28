// import dependencies
import { useHistory } from 'react-router';

function TriviaView() {
    const history = useHistory();
    const submit = (e) => {
        e.preventDefault();
        history.push('/result');
    };

    return (
        <div className='trivia-wrapper'>
            <form className='trivia-form' onSubmit={(e) => submit(e)}>
                <div className='trivia-score'>Score: 0</div>
                <div className='trivia-question'>What is a question statement?</div>
                <div className='trivia-answers'>
                    <ol type='A'>
                        <li>Answer 1</li>
                        <li>Answer 2</li>
                        <li>Answer 3</li>
                        <li>Answer 4</li>
                    </ol>
                </div>
                <input type='submit' value='Next' />
            </form>
        </div>
    );
}

export default TriviaView;
