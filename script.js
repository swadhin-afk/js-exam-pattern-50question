const questions = [
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["Float", "Boolean", "Decimal", "Double"],
        answer: "Boolean"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "=", "*", "x"],
        answer: "="
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        options: [
            "<script name='script.js'>",
            "<script href='script.js'>",
            "<script src='script.js'>",
            "<script link='script.js'>"
        ],
        answer: "<script src='script.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');"
        ],
        answer: "alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
            "def myFunction()"
        ],
        answer: "function myFunction()"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
        answer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["var carName;", "variable carName;", "v carName;", "int carName;"],
        answer: "var carName;"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "/* */"],
        answer: "//"
    },
    {
        question: "How do you call a function named `myFunction`?",
        options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["define", "new", "function", "class"],
        answer: "class"
    },
    {
        question: "What does NaN stand for?",
        options: ["Not a Null", "Not a Name", "Not a Number", "New Array Name"],
        answer: "Not a Number"
    },
    {
        question: "What does `typeof null` return?",
        options: ["object", "null", "undefined", "NaN"],
        answer: "object"
    },
    {
        question: "Which method converts JSON data to a JavaScript object?",
        options: ["JSON.convert()", "JSON.stringify()", "JSON.parse()", "JSON.objectify()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which keyword stops the execution of a function?",
        options: ["stop", "break", "return", "exit"],
        answer: "return"
    },
    {
        question: "What is the output of `typeof []`?",
        options: ["array", "object", "undefined", "list"],
        answer: "object"
    },
    {
        question: "Which of these is a primitive data type in JavaScript?",
        options: ["Array", "Object", "Function", "String"],
        answer: "String"
    },
    {
        question: "What is the output of `Boolean('')`?",
        options: ["true", "false", "undefined", "null"],
        answer: "false"
    },
    {
        question: "Which method is used to round a number down?",
        options: ["Math.ceil()", "Math.down()", "Math.floor()", "Math.round()"],
        answer: "Math.floor()"
    },
    {
        question: "What is the result of `2 + '2'` in JavaScript?",
        options: ["4", "'22'", "NaN", "undefined"],
        answer: "'22'"
    },
    {
        question: "Which keyword defines a constant in JavaScript?",
        options: ["constant", "const", "var", "let"],
        answer: "const"
    },
    {
        question: "How do you write a conditional in JavaScript?",
        options: ["if i=5", "if (i==5)", "if i==5 then", "if i = 5 then"],
        answer: "if (i==5)"
    },
    {
        question: "What will `console.log(typeof null)` output?",
        options: ["null", "object", "undefined", "NaN"],
        answer: "object"
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which operator checks both value and type?",
        options: ["==", "=", "===", "!"],
        answer: "==="
    },
    {
        question: "Which object is used to handle date and time?",
        options: ["Time", "Calendar", "Date", "Clock"],
        answer: "Date"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["<!-- comment -->", "# comment", "// comment", "** comment **"],
        answer: "// comment"
    },
    {
        question: "Which function is used to convert a number to a string?",
        options: ["toString()", "parseString()", "Stringify()", "numberToStr()"],
        answer: "toString()"
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        options: ["for", "while", "do...while", "foreach"],
        answer: "do...while"
    },
    {
        question: "Which built-in method combines the text of two strings?",
        options: ["concat()", "append()", "attach()", "merge()"],
        answer: "concat()"
    },
    {
        question: "What does `!==` mean?",
        options: [
            "Assignment operator",
            "Equal in value and type",
            "Not equal in value or type",
            "Strictly equal"
        ],
        answer: "Not equal in value or type"
    },
    {
        question: "Which statement is used to skip an iteration in a loop?",
        options: ["skip", "exit", "break", "continue"],
        answer: "continue"
    },
    {
        question: "How can you convert a string to an integer?",
        options: ["parseInt()", "int()", "Number.parse()", "toInt()"],
        answer: "parseInt()"
    },
    {
        question: "Which method removes the last element of an array?",
        options: ["remove()", "pop()", "delete()", "cut()"],
        answer: "pop()"
    },
    {
        question: "Which of the following is a falsy value?",
        options: ["'false'", "[]", "0", "{}"],
        answer: "0"
    },
    {
        question: "Which keyword is used to create an asynchronous function?",
        options: ["defer", "async", "await", "yield"],
        answer: "async"
    },
    {
        question: "Which statement is true about `let`?",
        options: [
            "Has global scope",
            "Can be redeclared",
            "Has block scope",
            "Is hoisted with initialization"
        ],
        answer: "Has block scope"
    },
    {
        question: "What is the default value of `undefined`?",
        options: ["0", "null", "undefined", "false"],
        answer: "undefined"
    },
    {
        question: "Which function is used to delay execution?",
        options: ["setDelay()", "setInterval()", "setTimeout()", "wait()"],
        answer: "setTimeout()"
    },
    {
        question: "What is the result of `typeof NaN`?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number"
    },
    {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "handle", "error", "try"],
        answer: "try"
    },
    {
        question: "What is closure in JavaScript?",
        options: [
            "A function having access to its parent scope",
            "A way to close tabs",
            "A global variable",
            "A block of CSS"
        ],
        answer: "A function having access to its parent scope"
    },
    {
        question: "What will `null == undefined` return?",
        options: ["true", "false", "null", "undefined"],
        answer: "true"
    },
    {
        question: "What is a promise?",
        options: [
            "A global variable",
            "An error handler",
            "An object representing future value",
            "A new scope"
        ],
        answer: "An object representing future value"
    },
    {
        question: "How do you clone an array in ES6?",
        options: ["array.clone()", "[...array]", "array.copy()", "array.map()"],
        answer: "[...array]"
    },
    {
        question: "What will `[] == false` return?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        question: "Which method converts an array to string?",
        options: ["toString()", "stringify()", "joinString()", "convert()"],
        answer: "toString()"
    },
    {
        question: "What does `this` keyword refer to in a regular function?",
        options: ["Window object", "Function itself", "Global scope", "Parent function"],
        answer: "Window object"
    },
    {
        question: "What is event bubbling?",
        options: [
            "Events bubbling up from child to parent",
            "Events going downward",
            "CSS property",
            "A JS framework"
        ],
        answer: "Events bubbling up from child to parent"
    }
];

// Exam state
let currentQuestion = 0;
let userAnswers = {};
let examStartTime;
let timerInterval;
let timeRemaining = 50 * 60; // 50 minutes in seconds

// DOM elements
const welcomeScreen = document.getElementById('welcomeScreen');
const questionContainer = document.getElementById('questionContainer');
const resultScreen = document.getElementById('resultScreen');
const timerDisplay = document.getElementById('timer');
const questionNumber = document.getElementById('questionNumber');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

function startExam() {
    welcomeScreen.style.display = 'none';
    questionContainer.style.display = 'block';
    examStartTime = new Date();
    startTimer();
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 300) { // 5 minutes warning
            timerDisplay.classList.add('timer-warning');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Load options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            ${option}
        `;
        optionElement.onclick = () => selectOption(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });
    
    // Restore selected answer if exists
    if (userAnswers[currentQuestion] !== undefined) {
        const selectedOption = optionsContainer.children[userAnswers[currentQuestion]];
        selectedOption.classList.add('selected');
    }
    
    // Update navigation buttons
    backBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function selectOption(optionIndex, optionElement) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = optionIndex;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitExam() {
    clearInterval(timerInterval);
    const examEndTime = new Date();
    const timeTaken = examEndTime - examStartTime;
    
    // Calculate results
    let correctAnswers = 0;
    let wrongAnswers = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            const userAnswer = question.options[userAnswers[index]];
            if (userAnswer === question.answer) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        } else {
            wrongAnswers++;
        }
    });
    
    const unanswered = questions.length - Object.keys(userAnswers).length;
    const score = (correctAnswers / questions.length) * 100;
    
    // Display results
    showResults(correctAnswers, wrongAnswers, unanswered, score, timeTaken);
}

function showResults(correct, wrong, unanswered, score, timeTaken) {
    questionContainer.style.display = 'none';
    resultScreen.style.display = 'block';
    resultScreen.classList.add('active');
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    const correctAnswersElement = document.getElementById('correctAnswers');
    const wrongAnswersElement = document.getElementById('wrongAnswers');
    const timeTakenElement = document.getElementById('timeTaken');
    
    scoreDisplay.innerHTML = `
        <h3>Your Score</h3>
        <div style="font-size: 2.5em; font-weight: bold; margin: 20px 0;">
            ${score.toFixed(1)}%
        </div>
        <div style="font-size: 1.2em;">
            ${getGradeMessage(score)}
        </div>
    `;
    
    correctAnswersElement.textContent = correct;
    wrongAnswersElement.textContent = wrong + unanswered;
    
    const minutes = Math.floor(timeTaken / 60000);
    const seconds = Math.floor((timeTaken % 60000) / 1000);
    timeTakenElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getGradeMessage(score) {
    if (score >= 90) return "Excellent! Outstanding performance!";
    if (score >= 80) return "Very Good! Great job!";
    if (score >= 70) return "Good! Well done!";
    if (score >= 60) return "Fair! Keep practicing!";
    return "Needs Improvement! Study more!";
}

function sendResults() {
    const emailInput = document.getElementById('emailInput');
    const emailBtnText = document.getElementById('emailBtnText');
    const emailLoading = document.getElementById('emailLoading');
    
    if (!emailInput.value) {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show loading state
    emailBtnText.classList.add('hidden');
    emailLoading.classList.remove('hidden');
    
    // Simulate sending email (replace with actual email service)
    setTimeout(() => {
        emailBtnText.classList.remove('hidden');
        emailLoading.classList.add('hidden');
        alert('Results sent successfully to ' + emailInput.value);
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function restartExam() {
    // Reset exam state
    currentQuestion = 0;
    userAnswers = {};
    timeRemaining = 50 * 60;
    
    // Reset displays
    resultScreen.style.display = 'none';
    resultScreen.classList.remove('active');
    welcomeScreen.style.display = 'block';
    
    // Reset timer display
    timerDisplay.textContent = '50:00';
    timerDisplay.classList.remove('timer-warning');
    
    // Clear email input
    document.getElementById('emailInput').value = '';
}