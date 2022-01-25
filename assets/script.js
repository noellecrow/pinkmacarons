var title = document.querySelector('#title');
var startButton = document.querySelector('#start-button');
var timerDisplay = document.querySelector('#timer');
var description = document.querySelector('#game-description');
var viewHighscore = document.querySelector('#highscore');

var buttons = document.querySelectorAll('#button-div');

var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

var secondsLeft = 60;



// Array of objects for each question of the quiz
var arrayOfQuestions = [
    {
        'question': 'Inside which HTML element do we put the JavaScript?',
        'firstAnswer': '1) <javascript>',
        'secondAnswer': '2) <js>',
        'thirdAnswer': '3) <script>',
        'fourthAnswer': '4) <scripting>',
        'correctAnswer': 3
    },
    {
        'question': 'How do you call a function named "coolFunction"?',
        'firstAnswer': '1) call coolFunction()',
        'secondAnswer': '2) coolfunction()',
        'thirdAnswer': '3) var function(coolFunction())',
        'fourthAnswer': '4) coolFunction()',
        'correctAnswer': 4
    },
    {
        'question': 'How do you write an IF statement for executing some code if "i" is NOT equal to 4?',
        'firstAnswer': '1) if i=!4 then',
        'secondAnswer': '2) if (i<>4)',
        'thirdAnswer': '3) if i<>4',
        'fourthAnswer': '4) if(i!=4)',
        'correctAnswer': 4
    },
    {
        'question': 'Which jQuery method returns the direct parent element of the selected element?',
        'firstAnswer': '1) parent()',
        'secondAnswer': '2) jQuery.parent()',
        'thirdAnswer': '3) parent.()',
        'fourthAnswer': '4) child()',
        'correctAnswer': 1
    },
    {
        'question': 'What is the correct way to write a JavaScript array?',
        'firstAnswer': '1) var fruits = ["coconut", "kiwi", "pineapple"]',
        'secondAnswer': '2) var fruits = [coconut, kiwi, pineapple]',
        'thirdAnswer': '3) var fruits = ["coconut, kiwi, pineapple"]',
        'fourthAnswer': '4) var fruits = [(coconut), (kiwi), (pineapple)]',
        'correctAnswer': 1
    },
    {
        'question': 'How does a FOR loop start?',
        'firstAnswer': '1) for (i<=5; i++)',
        'secondAnswer': '2) for (i=0; i<=5; i++)',
        'thirdAnswer': '3) for (i=0; i<=5)',
        'fourthAnswer': '4) for (i==0; i<=5; i++)',
        'correctAnswer': 2
    },
    {
        'question': 'What would be the result of 5+2+"3" in JavaScript?',
        'firstAnswer': '1) 7+"3"',
        'secondAnswer': '2) 10',
        'thirdAnswer': '3) 23',
        'fourthAnswer': '4) 73',
        'correctAnswer': 4
    },
    {
        'question': 'What function is used to parse a string to integer?',
        'firstAnswer': '1) parseInt()',
        'secondAnswer': '2) parse.Int()',
        'thirdAnswer': '3) intParse()',
        'fourthAnswer': '4) int.Parse()',
        'correctAnswer': 1
    },
    {
        'question': 'Inside which HTML element do we put the JavaScript?',
        'firstAnswer': '1) <javascript>',
        'secondAnswer': '2) <js>',
        'thirdAnswer': '3) <script>',
        'fourthAnswer': '4) <scripting>',
        'correctAnswer': 3
    },
    {
        'question': 'Inside which HTML element do we put the JavaScript?',
        'firstAnswer': '1) <javascript>',
        'secondAnswer': '2) <js>',
        'thirdAnswer': '3) <script>',
        'fourthAnswer': '4) <scripting>',
        'correctAnswer': 3
    },

]




function endQuiz() {
    questionCard.style.display = "none"
    finalCard.style.display = "block"
    submitBtn.addEventListener("click", addInitials);
}

function addInitials(event){
    event.preventDefault()
    localStorage.setItem("highscore1", "5")
}
