// import dependencies
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// import trivia database
import data from '../../api/Apprentice_TandemFor400_Data.json';

// function to generate a set of 10 random problems without duplicates
function generateProblems() {
    let added = new Set();
    let problems = [];

    while (problems.length !== 10) {
        const id = getRandomInt(data.length);
        const answers = shuffle(data[id].incorrect.concat([data[id].correct]));
        data[id]['answers'] = answers;
        added.add(id);
        problems.push(data[id]);
    }

    return problems;
}

// function to get a random integer from 0 -> data.length (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// function to shuffle a given array
// uses durstenfeld's shuffling algorithm
function shuffle(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function TriviaView() {
    // componentdidmount - generate questions
    const [problems, setProblems] = useState([]);
    useEffect(() => {
        const generatedProblems = generateProblems;
        setProblems(generatedProblems);
    }, []);
    const [score, setScore] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);

    const history = useHistory();
    const next = (e) => {
        e.preventDefault();

        if (questionId === 9) {
            history.push({
                pathname: '/result',
                state: { score: score },
            });
        } else {
            setQuestionId(questionId + 1);
        }

        setSubmitted(false);
        setSelectedAnswer(null);
    };

    const submit = (e) => {
        e.preventDefault();

        if (problems[questionId].answers.indexOf(problems[questionId].correct) === selectedAnswer) {
            setScore(score + 1);
            console.log('correct');
        } else {
            console.log('incorrect');
        }

        setSubmitted(true);
    };

    return (
        <div className='trivia-wrapper'>
            {problems.length ? (
                <form className='trivia-form' onSubmit={(e) => submit(e)}>
                    <div className='trivia-score'>Score: {score}/10</div>
                    <div className='trivia-problem'>Problem #{questionId + 1}</div>
                    <div className='trivia-question'>{problems[questionId].question}</div>
                    <div className='trivia-answers'>
                        <ol type='A'>
                            {problems[questionId].answers.map((answer, index) => {
                                return (
                                    <li key={index} onClick={() => setSelectedAnswer(index)}>
                                        {answer}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    {!isSubmitted ? (
                        <button type='submit' disabled={selectedAnswer === null ? true : false}>
                            Submit
                        </button>
                    ) : (
                        <button onClick={(e) => next(e)}>Next</button>
                    )}
                </form>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default TriviaView;
