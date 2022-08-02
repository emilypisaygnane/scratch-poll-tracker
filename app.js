// import functions and grab DOM elements
const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-poll-container');

const optionForm = document.getElementById('option-form');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const optionAInput = document.getElementById('option-a-input');
const optionBInput = document.getElementById('option-b-input');
// let state
const pastPolls = [];

let currentPol = {
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0,
};

optionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(optionForm);

    
})

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
