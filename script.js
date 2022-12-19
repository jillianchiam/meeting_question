const questionTimeSection = document.getElementById('question-time');
const questionDinnerSection = document.getElementById('question-dinner');
const questionLunchSection = document.getElementById('question-lunch');
const invitationContainerSection = document.getElementById('invitation-container');
const invitationContainerLunchSection = document.getElementById('invitation-container-lunch');
const invitationContainerLunchHangoutSection = document.getElementById('invitation-container-lunch-hangout');
const noDecisionContainerSection = document.getElementById('no-decision-container');
const answerButtons1 = document.getElementById('answer-buttons-1');
const answerButtons2 = document.getElementById('answer-buttons-2');
const answerButtons3 = document.getElementById('answer-buttons-3');
const answerButtons4 = document.getElementById('answer-buttons-4');

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

Array.from(answerButtons4.children).forEach(button => {
    button.addEventListener('click', answerSectionProcessor4);

});

function answerSectionProcessor1(element){
    questionTimeSection.classList.remove('hide');
    if (element.target.innerHTML == "No") {
        document.getElementById('question-time-subtext').classList.remove('hide');
    } else {
        document.getElementById('question-time-subtext').classList.add('hide');
    }
    resetNextQuestion(questionDinnerSection);
    resetNextQuestion(questionLunchSection);
    resetNextQuestion(invitationContainerSection);
    resetNextQuestion(invitationContainerLunchSection);
    resetNextQuestion(invitationContainerLunchHangoutSection);
    resetNextQuestion(noDecisionContainerSection);
}

function answerSectionProcessor2(element){
    questionDinnerSection.classList.remove('hide');
    weekend = element.target.innerHTML == "Weekend"? true : false;
    if (weekend) {
        resetNextQuestion(questionDinnerSection);
        resetNextQuestion(invitationContainerSection);
        resetNextQuestion(noDecisionContainerSection);
        questionDinnerSection.classList.add('hide');
        questionLunchSection.classList.remove('hide');
    } else {
        resetNextQuestion(questionLunchSection);
        resetNextQuestion(invitationContainerLunchSection);
        resetNextQuestion(invitationContainerLunchHangoutSection);
        resetNextQuestion(noDecisionContainerSection);
        questionDinnerSection.classList.remove('hide');
        questionLunchSection.classList.add('hide');
    }
}

function answerSectionProcessor3(element){
    if (element.target.innerHTML == "Nah!") {
        noDecisionContainerSection.classList.remove('hide');
        resetNextQuestion(invitationContainerSection);
    } else {
        invitationContainerSection.classList.remove('hide');
        resetNextQuestion(noDecisionContainerSection);
    }
}

function answerSectionProcessor4(element){
    if (element.target.innerHTML == "Lunch") {
        invitationContainerLunchSection.classList.remove('hide');
        resetNextQuestion(invitationContainerLunchHangoutSection);
    } else {
        invitationContainerLunchHangoutSection.classList.remove('hide');
        resetNextQuestion(invitationContainerLunchSection);
    }
}


function resetNextQuestion(element) {
    element.classList.add('hide');
}