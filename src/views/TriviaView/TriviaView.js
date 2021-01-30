// import dependencies
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// import components
import Layout from '../../components/Layout/Layout';

// import styling
import './TriviaView.scss';

// import trivia database
import data from '../../api/Apprentice_TandemFor400_Data.json';

// function to generate a set of 10 random problems without duplicates
const generateProblems = () => {
    let added = new Set();
    let problems = [];

    while (problems.length !== 10) {
        let id = getRandomInt(data.length);
        if (!added.has(id)) {
            const answers = shuffle(data[id].incorrect.concat([data[id].correct]));
            data[id]['answers'] = answers;
            added.add(id);
            problems.push(data[id]);
        }
    }

    return problems;
};

// function to get a random integer from 0 -> data.length (exclusive)
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

// function to shuffle a given array
/** uses durstenfeld's shuffling algorithm
 *  time complexity - O(n)
 *  only has to loop over array once making random swaps
 */
const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// functional component for playing trivia
/** Went with this approach because if they try to reload after getting a problem wrong
 *  it'll reset their entire progress
 */
function TriviaView() {
    const [problems, setProblems] = useState([]);
    const [score, setScore] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isSubmitted, setSubmitted] = useState(false);

    // componentdidmount - generate questions
    useEffect(() => {
        const generatedProblems = generateProblems;
        setProblems(generatedProblems);
    }, []);

    const history = useHistory();
    // function to render next question for user or ResultView if user is on last question
    const next = (e) => {
        e.preventDefault();

        if (questionId === 9) {
            // passes ResultView the score they got
            history.push({
                pathname: '/result',
                state: { score: score },
            });
        } else {
            setQuestionId(questionId + 1);
        }

        setSubmitted(false);
        setSelected(null);
    };
    // function to submit question and check if user got the right answer
    const submit = (e) => {
        e.preventDefault();

        if (problems[questionId].answers.indexOf(problems[questionId].correct) === selected) {
            setScore(score + 1);
        }

        setSubmitted(true);
    };

    return (
        <Layout style={{ background: 'linear-gradient(to bottom, #e4f2e4 80%, #ffffff 20%)' }}>
            <div className='trivia-wrapper'>
                {problems.length ? ( // handles on page load, and there's no problems to display yet
                    <form className='trivia-form' onSubmit={(e) => submit(e)}>
                        <div className='trivia-score'>Score: {score}/10</div>
                        <div className='trivia-problem'>Problem #{questionId + 1}</div>
                        <div className='trivia-question'>{problems[questionId].question}</div>
                        <div className='trivia-answers'>
                            <ol type='A'>
                                {problems[questionId].answers.map((answer, index) => {
                                    return (
                                        <li
                                            // depending on state, will show correct/incorrect answers if needed
                                            className={`trivia-option
                                            ${!isSubmitted && selected === index ? 'selected' : ''}
                                            ${
                                                isSubmitted &&
                                                problems[questionId].answers.indexOf(
                                                    problems[questionId].correct
                                                ) === index
                                                    ? 'correct'
                                                    : ''
                                            }
                                            ${
                                                isSubmitted &&
                                                index === selected &&
                                                problems[questionId].answers.indexOf(
                                                    problems[questionId].correct
                                                ) !== selected
                                                    ? 'incorrect'
                                                    : ''
                                            }`}
                                            key={index}
                                            onClick={() => {
                                                // prevent users from selecting another answer if they already submitted
                                                if (!isSubmitted) {
                                                    setSelected(index);
                                                }
                                            }}
                                        >
                                            {index + 1}. {answer}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                        {!isSubmitted ? (
                            <button
                                className='btn btn-submit'
                                type='submit'
                                disabled={selected === null ? true : false}
                            >
                                Submit
                            </button>
                        ) : (
                            <button className='btn btn-next' onClick={(e) => next(e)}>
                                Next
                            </button>
                        )}
                    </form>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </Layout>
    );
}

export { generateProblems, getRandomInt, shuffle, TriviaView as default };
