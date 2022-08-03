// import functions and grab DOM elements
import { renderPoll } from './test/render-poll.js';

const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-poll-container');

const optionForm = document.getElementById('option-form');
const enterPollButton = document.querySelector('#enter-button');
const questionEl = document.getElementById('question-input');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const finishPollButton = document.getElementById('finish-poll=button');
const optionAInputEl = document.getElementById('option-a-input');
const optionBInputEl = document.getElementById('option-b-input');

// let state

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;
let pastPolls = [];

enterPollButton.addEventListener('click', () =>{

    const currentPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB
    };

    pastPolls.push(currentPoll);

    pastPollsEl.textContent = '';

    for (let poll of pastPolls) {
        const pollEl = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB)

        pastPollsEl.append(pollEl);
    }

    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;

    questionEl.value = '';
    optionA.value = '';
    optionB.value = '';

    displayCurrentPoll();
});

optionAAddButton.addEventListener ('click', () => {
    votesA++;

    displayCurrentPoll();
});

optionBAddButton.addEventListener ('click', () => {
    votesB++;

    displayCurrentPoll();
});

optionASubtractButton.addEventListener ('click', () => {
    votesA--;

    displayCurrentPoll();
});

optionBSubtractButton.addEventListener ('click', () => {
    votesB--;

    displayCurrentPoll();
});

function displayCurrentPoll() {
    currentPollEl.textContent = '';

    const pollEl = renderPoll(question, optionA, optionB, votesA, votesB);

    pollEl.classList.add('current');

    currentPollEl.append(pollEl);
}

function displayAllPolls() {
    pastPollsEl.textContent = '';

    for (let poll of pastPolls) {
        const pollEl = renderPoll(poll);

        pollEl.classList.add('past');

        pastPollsEl.append(pollEl);
    }
}

finishPollButton.addEventListener('click', () => {
    pastPolls.push(currentPoll);

    displayAllPolls();

    currentPoll = {
        optionA: '',
        optionB: '',
        votesA: 0,
        votesB: 0,
    };

    displayCurrentPoll();
});

