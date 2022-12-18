const questionTimeSection = document.getElementById('question-time');
const questionDinnerSection = document.getElementById('question-dinner');
const invitationContainerSection = document.getElementById('invitation-container');
const noDecisionContainerSection = document.getElementById('no-decision-container');
const answerButtons1 = document.getElementById('answer-buttons-1');
const answerButtons2 = document.getElementById('answer-buttons-2');
const answerButtons3 = document.getElementById('answer-buttons-3');

let weekend;

Array.from(answerButtons1.children).forEach(button => {
    button.addEventListener('click', answerSectionProcessor1);

});

Array.from(answerButtons2.children).forEach(button => {
    button.addEventListener('click', answerSectionProcessor2);

});

Array.from(answerButtons3.children).forEach(button => {
    button.addEventListener('click', answerSectionProcessor3);

});

function answerSectionProcessor1(element){
    questionTimeSection.classList.remove('hide');
    if (element.target.innerHTML == "No") {
        document.getElementById('question-time-subtext').classList.remove('hide');
    } else {
        document.getElementById('question-time-subtext').classList.add('hide');
    }
}

function answerSectionProcessor2(element){
    questionDinnerSection.classList.remove('hide');
    weekend = element.target.innerHTML == "Weekend"? true : false;
    document.getElementById('question3').innerText = weekend ? "Lunch only or Hangout?" : "Let's Grab Dinner"
}

function answerSectionProcessor3(element){
    if (element.target.innerHTML == "Nah!") {
        noDecisionContainerSection.classList.remove('hide');
        invitationContainerSection.classList.add('hide');
    } else {
        invitationContainerSection.classList.remove('hide');
        noDecisionContainerSection.classList.add('hide');
    }
    
}