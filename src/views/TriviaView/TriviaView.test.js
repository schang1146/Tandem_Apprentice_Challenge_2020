import { generateProblems, getRandomInt, shuffle } from './TriviaView';

test('generateProblems() returns a list of 10 elements', () => {
    const problems = generateProblems();
    expect(problems.length).toBe(10);
});

test('generateProblems() returns a unique list', () => {
    const problemsArray = generateProblems();
    const problemsSet = new Set(problemsArray);
    expect(problemsArray.length === problemsSet.size).toBeTruthy();
});

test('getRandomInt(max) generates integers lower than max', () => {
    const max = 2;
    let array = [];
    while (array.length < 15) {
        array.push(getRandomInt(max));
    }
    expect(Math.max(...array)).toBeLessThan(max);
});

test("shuffle(array) doesn't lose any elements", () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArray = shuffle(array);
    expect(array.sort()).toBe(shuffledArray.sort());
});
