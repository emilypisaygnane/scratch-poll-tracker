export function renderPoll(poll) {
    
    const questionDiv = document.createElement('div');
    const optionA = document.createElement('p');
    const optionB = document.createElement('p');
    const optionACount = document.createElement('p');
    const optionBCount = document.createElement('p');

    questionDiv.textContent = poll.question;
    optionA.textContent = poll.optionA;
    optionB.textContent = poll.optionB;
    optionACount.textContent = poll.optionACount;
    optionBCount.textContent = poll.optionBCount;

    questionDiv.append(optionA, optionACount, optionB, optionBCount);
        
    return questionDiv;
    
}