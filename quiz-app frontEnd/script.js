//soumd effects
var sfx = {
    quizMusic: new Howl({
        src: ["quiz-music.mp3"],
        loop: true,
        onend: function () {
            console.log("done playing music");
        },
    }),

    correct: new Howl({
        src: ["correct.mp3"],
        loop: false,
        onend: function () {
            console.log("correct");
        },
    }),

    wrong: new Howl({
        src: ["wrong.mp3"],
        loop: false,
        onend: function () {
            console.log("wrong");
        },
    }),

    wow: new Howl({
        src: ["anime wow.mp3"],
        loop: false,
        onend: function () {
            console.log("wow");
        },
    }),
};

// function stopQuizMusic() {
//     sfx.quizMusic.fade(1, 0, 2000);
//     setTimeout(function () {
//         sfx.quizMusic.stop();
//     }, 2000);
// }

// Select the container element with the ID "container" using the querySelector method
let container = document.querySelector("#container");

// Initialize variables to keep track of the current question number and total correct answers
// let current_question = 1;
// let total_correct_ans = 0;

// Execute the quizRules function after the window has finished loading
window.onload = () => {
    quizRules();
};

// Define the quizRules function
let quizRules = () => {
    // Reset the current question number and total correct answers to 0
    current_question = 1;
    total_correct_ans = 0;

    // Set the container's HTML to display the quiz rules and a "Start Quiz" button
    container.innerHTML = `
    <div class="header">QUIZ RULES</div>
        <ol>
        
        </ol>
    <div id="start-quiz-wrapper">

            <button id="start-quiz">Start Quiz</button>

    </div>
    `;

    // Select the ordered list element using the querySelector method
    ol = document.querySelector("ol");

    // Iterate over the quiz_rules array and add each rule as a list item to the ordered list
    quiz_rules.forEach((rule) => {
        ol.innerHTML += `<li>${rule}</li>`;
    });

    // Select the "Start Quiz" button using the querySelector method
    start_quiz_btn = document.querySelector("#start-quiz");

    // Add a click event listener to the "Start Quiz" button that will call the quizQuestion function when clicked
    start_quiz_btn.addEventListener("click", () => {
        quizQuestion(current_question);
        // sfx.quizMusic.volume(1);
        // sfx.quizMusic.play();
        if (sfx.quizMusic.playing()) {
        } else {
            sfx.quizMusic.volume(1); // set volume to 50%
            sfx.quizMusic.play();
        }
    });
};

// Define a function called quizQuestion that takes a parameter q
let quizQuestion = (q) => {
    // Decrement the value of q by 1
    q--;
    // Use template literals to create a block of HTML code and assign it to the innerHTML property of an element with the container ID
    container.innerHTML = `
          <div class="header">QUIZ APP</div>

          <div class="content">

                <div class="content-wrapper">

                    <span class="question-number">Question ${current_question}.</span>

                        <h2 class="question">                           
                            ${quiz_questions[q]["question"]}
                        </h2>

                        <div id="option-container">

                        </div>
                </div>

                <div class="footer" id="footer">
                    <p id="timer">Time Left: 20 Sec</p>
                </div>
                
          </div>
        `;

    // This line gets the HTML element with the ID "option-container"
    let options_container = document.querySelector("#option-container");

    // This line loops through the options for the current quiz question and performs the following steps for each option
    quiz_questions[q]["options"].forEach((option) => {
        // This line creates a new HTML paragraph element with the class "option" and the option text inside
        // The backticks (`) allow for interpolation of the option text inside the string
        let optionHTML = `<p class="option">${option}</p>`;
        // This line appends the newly created HTML paragraph element to the options container element
        options_container.innerHTML += optionHTML;
    });

    options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            clearInterval(interval);
            // adding next question button
            document.querySelector(
                "#footer"
            ).innerHTML += `<button id="next-question">Next</button>`;

            document
                .querySelector("#next-question")
                .addEventListener("click", () => {
                    if (current_question == quiz_questions.length) {
                        clearInterval(interval);
                        quizResult();
                        return;
                    }
                    current_question++;
                    clearInterval(interval);
                    quizQuestion(current_question);
                });

            // disable all options.
            options.forEach((disabled) => {
                disabled.style.pointerEvents = "none";
            });

            // storing selected answers
            quiz_questions[q]["selected_answer"] = index + 1;
            console.log(quiz_questions);

            if (index + 1 == quiz_questions[q]["answer"]) {
                option.classList.add("correct");
                total_correct_ans++;
                option.innerHTML += "<span>Correct</span>";
                console.log("correct");
                option.style.backgroundColor = "#1bd027";
                sfx.correct.play();
            } else {
                option.classList.add("wrong");
                // option.classList.remove("hover");
                option.innerHTML += "<span>Wrong</span>";
                console.log("wrong");
                option.style.backgroundColor = "#e73030";
                sfx.wrong.play();
            }
        });
    });

    // creating timer
    // 20 seconds (default time)
    time_left = 20;
    interval = setInterval(() => {
        time_left--;
        if (time_left == 0) {
            clearInterval(interval);
            // disable all options.
            options.forEach((disabled) => {
                disabled.style.pointerEvents = "none";
            });

            // adding next question button
            document.querySelector(
                "#footer"
            ).innerHTML += `<button id="next-question">Next</button>`;

            document
                .querySelector("#next-question")
                .addEventListener("click", () => {
                    if (current_question == quiz_questions.length) {
                        clearInterval(interval);
                        quizResult();
                        return;
                    }
                    current_question++;
                    quizQuestion(current_question);
                });
            document.querySelector("#timer").classList.add("time-over");
            document.querySelector("#timer").innerHTML = `Time Over`;
        } else {
            document.querySelector(
                "#timer"
            ).innerHTML = `Time Left: ${time_left} Sec`;
        }
    }, 1000);
};

let quizResult = () => {
    sfx.wow.play();
    // container.innerHTML = `
    // <div class="header">QUIZ RESULT</div>
    //     <div id="trophy">
    //         <i class="fa-solid fa-trophy"></i>
    //     </div>
    //     <h3 id="score">You Got <b>${total_correct_ans}</b> Out Of <b>${quiz_questions.length}</b></h3>
    //     <div id="result-footer">
    //         <button id="start-again">Start Again</button>
    //         <button id="detailed-result">View Detail</button>
    //     </div>
    // `;

    container.innerHTML = `
    <div class="header">QUIZ RESULT</div>
        <div id="trophy">
        <img id="trophyImg" src="trophy.png" alt="">
        </div>
        <h3 id="score">You Got <b>${total_correct_ans}</b> Out Of <b>${quiz_questions.length}</b></h3>
        <div id="result-footer">
            <button id="start-again">Start Again</button>
            <button id="detailed-result">View Detail</button>
        </div>
    `;

    document.querySelector("#start-again").addEventListener("click", () => {
        // sfx.quizMusic.fade(1, 0, 2000);
        // console.log("music stop");

        // setTimeout(function () {
        //     sfx.quizMusic.stop();
        // }, 2000); // wait for 2 seconds (same duration as the fade effect)

        quizRules();
    });

    document.querySelector("#detailed-result").addEventListener("click", () => {
        viewResult();
    });
};

let viewResult = () => {
    container.innerHTML = `
    <div class="header">RESULT DETAIL</div>
        <div class="content"></div>

        <h3 id="score" class="result-score">You Got <b>${total_correct_ans}</b> Out Of <b>${quiz_questions.length}</b></h3>
        <div id="result-footer">
            <button id="start-again">Start Again</button>
            <button id="view-result">View Result</button>
        </div>
    `;

    document.querySelector("#start-again").addEventListener("click", () => {
        // sfx.quizMusic.fade(1, 0, 2000);
        // console.log("music stop");

        // setTimeout(function () {
        //     sfx.quizMusic.stop();
        // }, 2000); // wait for 2 seconds (same duration as the fade effect)
        quizRules();
    });

    document.querySelector("#view-result").addEventListener("click", () => {
        quizResult();
    });

    // let quiz_result = document.querySelector(".content");
    // quiz_questions.forEach((quiz,index) => {
    //     console.log(quiz);
    //     quiz_result.innerHTML += `
    //     <div class="content-wrapper">
    //             <h2 class="question">${index+1 + "." + quiz['question']}</h2>
    //             <div class="option-container${index}"></div>
    //     </div>
    //     `;

    // let quiz_result = document.querySelector(".content");
    // quiz_questions.forEach((quiz, index) => {
    //     console.log(quiz);
    //     quiz_result.innerHTML += `
    //     <div class="content-wrapper">
    //             <h2 class="question">${quiz["question"]}</h2>
    //             <div class="option-container${index}"></div>
    //     </div>
    //     `;

    let quiz_result = document.querySelector(".content");
    quiz_questions.forEach((quiz, index) => {
        console.log(quiz);
        quiz_result.innerHTML += `
    <div class="content-wrapper">
    <span class="question-number">${index + 1}.</span>
      <h2 class="question">
        
        ${quiz["question"]}
      </h2>
      <div class="option-container${index}"></div>
    </div>
  `;

        option_container = document.querySelector(`.option-container${index}`);

        quiz["options"].forEach((option, index) => {
            if (quiz["selected_answer"] == quiz["answer"]) {
                if (index + 1 == quiz["answer"]) {
                    option_container.innerHTML += `<p class="result-option correct">${option} <span>You</span></p>`;
                } else {
                    option_container.innerHTML += `<p class="result-option">${option}</p>`;
                }
            } else {
                if (index + 1 == quiz["answer"]) {
                    option_container.innerHTML += `<p class="result-option correct">${option} <span>Correct</span></p>`;
                } else if (index + 1 == quiz["selected_answer"]) {
                    option_container.innerHTML += `<p class="result-option wrong">${option} <span>You</span></p>`;
                } else {
                    option_container.innerHTML += `<p class="result-option">${option}</p>`;
                }
            }
        });
    });
};
