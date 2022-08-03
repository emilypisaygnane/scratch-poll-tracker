export function renderPoll(poll) {
    const div = document.createElement('div');
    const optionADiv = renderOption(poll.optionA, poll.votesA);
    const optionBDiv = renderOption(poll.optionB, poll.votesB);

    div.append(optionADiv, optionBDiv);

    div.classList.add('poll');

    return div;
}

export function renderOption(question, vote) {
    const questionDiv = document.createElement('div');
    const optionDiv = document.createElement('p');
    const voteDiv = document.createElement('p');


    questionDiv.classList.add('question');
    optionDiv.classList.add('option');
    voteDiv.classList.add('vote');

    questionDiv.textContent = question;
    voteDiv.textContent = vote;

    optionDiv.append(questionDiv, voteDiv);

    return optionDiv;
}