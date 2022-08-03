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

let pastPolls = [];

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;


optionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = new FormData(optionForm);

    const optionA = data.get ('option-a');
    const optionB = data.get ('option-b');

    currentPoll.optionA = optionA;
    currentPoll.optionB = optionB;

    optionForm.reset();
    displayCurrentPollEl();
});

optionAAddButton.addEventListener ('click', () => {
    currentPoll.votesA++;

    displayCurrentPollEl();
});

optionBAddButton.addEventListener ('click', () => {
    currentPoll.votesB++;

    displayCurrentPollEl();
});

optionASubtractButton.addEventListener ('click', () => {
    currentPoll.votesA--;

    displayCurrentPollEl();
});

optionBSubtractButton.addEventListener ('click', () => {
    currentPoll.votesB--;

    displayCurrentPollEl();
});

function displayCurrentPollEl {
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
        question: '',
        optionA: '',
        optionB: '',
        votesA: 0,
        votesB: 0,
    };

    displayCurrentPollEl();
});

