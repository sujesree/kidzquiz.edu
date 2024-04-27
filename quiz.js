// Sample data
let username;
const data = [
    {
        question: "Q1:What is the color of the Sun",
        options: ["Red", "Yellow", "White", "Orange"],
        answer: "White",
        shortexplain: "The Sun is white in color.",
        explanation: "<br><br> The Sun is white in color.<br><br>"
            + "Sunlight is made up of all the colors in the rainbow like Red,Orange,Yellow,Green,Blue,Indigo,Violet.<br><br>"
    },
    {
        question: "Q2: Which Star/Planet is responsible for making the sky blue?",
        options: ["Jupiter", "Sun", "Earth", "Mars"],
        answer: "Sun",
        shortexplain: "The Sun is responsible for making the sky blue.",
        explanation: "<br><br> The sky appears blue because of the way sunlight interacts with the gases in the Earth's atmosphere.<br><br>"
            + "Sunlight is made up of all the colors in the rainbow. When the sunlight enters the Earth's atmosphere, it collides with tiny gas molecules like oxygen and nitrogen and all the other colors is allowed to enter except blue and purple <br><br>"
            + "So,the blue light is scattered everywhere in the atomosphere and hence blue color is visible to the human eyes <br><br>"
            + "<a href='https://www.youtube.com/watch?v=ehUIlhKhzDA' target='_blank'>Video Explanation</a>"
    },
    {
        question: "Q3: Which is the following is NOT a Vegetable?",
        options: ["Tomato", "Carrot", "Spinach", "Cucumber"],
        answer: "Tomato",
        shortexplain: "Tomato is NOT a vegetable, it is a fruit.",
        explanation: "<br><br>Tomato is NOT a vegetable, it is a fruit.<br><br>"
            + "Tomatoes are fruits because they develop from the ovary of a flowering plant and contain seeds.<br><br>"
    },
    {
        question: "Q4: Which is the following is NOT a Tree?",
        options: ["Cocunut", "Banana", "Mango", "Banyan"],
        answer: "Banana",
        shortexplain: "Banana is NOT a Tree, it is a fruit.",
        explanation: "<br><br>Banana is NOT a Tree, it is a fruit.<br><br>"
            + "Although commonly referred to as banana trees, banana plants are technically classified as large herbs or herbaceous plants, not trees.<br><br>"
            + "Bananas dont have any branches or trunks<br><br>"
    },
    {
        question: "Q5: I am responsible for causing tides on beachs.Who am I?",
        options: ["Sun", "Jupiter", "Neptune", "Moon"],
        answer: "Moon",
        shortexplain: "The Moon is responsible for causing tides on beachs.",
        explanation: "<br><br>You know how the Moon looks like it's following you when you're in the car? That's because the Moon is actually orbiting or going around the Earth. The Moon has a strong pulling force called gravity that tugs on everything, even the oceans!<br><br>"
            + "Imagine the Earth and the Moon playing a game of tug-of-war with the ocean. The Moon's gravity pulls on the water, making a bulge on the side of the Earth closest to the Moon. At the same time, the Earth's gravity pulls on the water, causing another bulge on the opposite side. These bulges create the high tides.<br><br>"
            + "When the Moon moves around the Earth, the bulges move too, causing the tides to go in and out. So, it's like a big cosmic dance between the Earth, the Moon, and the ocean!.<br><br>"
            + "So, the Moon is the main reason why we have tides on Earth. The Sun helps out a little bit, too!<br><br>"
            + "<a href='https://youtube.com/shorts/rKC1nR1d2jA?si=TerPijjftkGPe4RY' target='_blank'>Video Explanation1</a><br><br>"
            + "<a href='https://www.youtube.com/watch?v=3RdkXs8BibE' target='_blank'>Video Explanation2</a>"
    },
    // Add more questions as needed
];

// quiz.js

document.getElementById('user-info-form').addEventListener('submit', function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Hide the form
    this.style.display = 'none';

    // Get the name value
    username = document.getElementById('name').value;

    if (username.toLowerCase().startsWith('ana')) {
        username = 'Miss Boom-Boom';
    }

    // Get the greeting element
    var greeting = document.getElementById('greeting');
    var parent = greeting.parentElement;

    // Set the greeting text
    var greetingText = 'Hi ' + username + ', Let us start the quiz...';
    var i = 0;

    // Show the greeting with a typing animation
    greeting.style.display = 'block';
    parent.style.display = 'block';
    greeting.style.fontFamily = "'Amatic SC', cursive";

    var typingInterval = setInterval(function () {
        greeting.textContent += greetingText[i];
        i++;
        if (i > greetingText.length - 1) {
            clearInterval(typingInterval);

            // After 3 seconds, hide the greeting and show the questions
            setTimeout(function () {
                greeting.style.display = 'none';
                parent.style.display = 'none';

                // Show the wave animation
                var waveAnimation = document.getElementById('wave-animation');
                waveAnimation.style.display = 'block';

                // After 5 seconds, hide the wave animation
                setTimeout(function () {
                    waveAnimation.style.display = 'none';
                }, 3000);

                var questions = document.querySelector('.questions');
                questions.style.display = 'block';
                questions.className = 'slide-in';


            }, 3000);
        }
    }, 100);
});


window.onload = function () {
    const questionSection = document.getElementById('question-section');
    const answerSection = document.getElementById('answer-section');
    const nextButton = document.getElementById('next-button');
    const containerrow = document.getElementById('firstrow');
    //const antsAnimation = document.getElementById('antsAnimation');
    // const catAnimation = document.getElementById('catAnimation');
    //const animations = [document.getElementById('antsAnimation'), document.getElementById('catAnimation')];
    const originalAnimations = [document.getElementById('antsAnimation')];
    let animations = [document.getElementById('antsAnimation')];
    let currentQuestionIndex = 0;

    function displayQuestion(index) {
        questionSection.innerHTML = '';
        answerSection.innerHTML = '';

        const item = data[index];
        const question = document.createElement('p');
        question.textContent = item.question;
        //question.className = 'animate__animated';
        questionSection.appendChild(question);

        if (animations.length === 1 || animations.length === 0) {
            animations = [...originalAnimations];
        }
        // Choose a random animation
        const animationIndex = Math.floor(Math.random() * animations.length);
        currentAnimation = animations[animationIndex];
        currentAnimation.style.display = 'flex';

        // Remove the selected animation from the array
        animations.splice(animationIndex, 1);



        const form = document.createElement('form');
        form.className = 'radio-buttons';
        item.options.forEach((option, optionIndex) => {
            const div = document.createElement('div');
            div.className = 'custom-control custom-radio';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = `option${index}-${optionIndex}`;
            radio.name = `question${index}`;
            radio.value = option;
            radio.className = 'custom-control-input';
            radio.onchange = function () {
                this.classList.add('animate__animated', 'animate__flash');
                setTimeout(() => {
                    this.classList.remove('animate__animated', 'animate__flash');
                }, 1000);
                //handleRadioChange(option, item, answerSection);
                if (option === item.answer) {
                    answerSection.innerHTML = "<span style='color: green;'>Correct answer!</span> " + item.answer + ': ' + item.explanation;

                } else {
                    answerSection.innerHTML = "<span'>Correct answer is </span> " + item.answer + ': ' + item.explanation;
                }
            };
            div.appendChild(radio);

            const label = document.createElement('label');
            label.className = 'custom-control-label';
            label.htmlFor = `option${index}-${optionIndex}`;
            label.textContent = option;
            div.appendChild(label);

            form.appendChild(div);
        });
        answerSection.appendChild(form);
        // Add event listener for radio button change here
        document.querySelector('.radio-buttons').addEventListener('change', function () {
            nextButton.style.display = 'block';
        });
    }

    displayQuestion(currentQuestionIndex);

    nextButton.onclick = function () {
        const animations = ['bounceIn', 'slideInRight', 'slideInLeft', 'fade-in'];
        nextButton.style.display = 'none';
        currentQuestionIndex++;
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        if (currentQuestionIndex === data.length) {
            // Hide the current animation
            if (currentAnimation) {
                currentAnimation.style.display = 'none';
            }

            questionSection.style.display = 'none';
            answerSection.style.display = 'none';

            // Create a parent div
            const parentDiv = document.createElement('div');
            parentDiv.id = 'shortexplain-section';

            const para=document.createElement('p');
            para.textContent= 'So ' + username + ',What did we learn today?';
            para.style.fontFamily = "'Architects Daughter', cursive";
            para.style.fontSize = 'xxx-large';
            para.style.fontWeight = 'bold';
            parentDiv.appendChild(para);
            // Create a new div for each short explanation and append it to the parent div
            data.forEach((item, index) => {
                const pickrandomAnimation = animations[Math.floor(Math.random() * animations.length)];
                setTimeout(() => {
                    const div = document.createElement('div');
                    div.textContent = item.shortexplain;
                    div.style.padding = '20px';
                    div.style.paddingTop = '0px';
                    div.style.fontFamily = "'Architects Daughter', cursive";
                    div.style.fontSize = 'x-large';
                    div.style.fontWeight = 'bold';
                    div.className = pickrandomAnimation; // Add your animation classes
                    parentDiv.appendChild(div);
                }, index * 2000); // Delay of 1 second between each div
            });

            // Append the parent div to the body
            containerrow.appendChild(parentDiv);
        } else {
            displayQuestion(currentQuestionIndex);
        }
        // Choose a random animation



        setTimeout(function () {
            const question = document.querySelector('#question-section p');
            const answer = document.querySelector('#answer-section form');
            question.className = randomAnimation;
            answer.classList.add(randomAnimation);
        }, 10); // 100ms delay



    };

    document.querySelector('.radio-buttons').addEventListener('change', function () {
        nextButton.style.display = 'block';
    });
};


var images = ['images/background/1.jpg', 'images/background/2.jpg', 'images/background/3.jpg', 'images/background/4.jpg', 'images/background/5.jpg'];
//var images = ['./images/background/11.jpg'];
var currentImage = 0;
//var containers = document.querySelectorAll('.answer-section, .question-section');
var containers = document.querySelectorAll('.answer-section, .question-section');

function changeBackground() {
    containers.forEach(function (container) {
        container.style.backgroundImage = 'url(' + images[currentImage] + ')';
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.width = '100%';
        container.style.height = '100vh';
        // container.classList.add('fade-in');
        // setTimeout(function () {
        //     container.classList.remove('fade-in');
        // }, 2000);

        currentImage = (currentImage + 1) % images.length;
        setTimeout(changeBackground, 5000); // Change image every 5 seconds
    });
}

//changeBackground();


function handleRadioChange(option, item, answerSection) {
    if (option === item.answer) {
        answerSection.innerHTML = "<span style='color: green;'>Correct answer!</span> " + item.answer + ': ' + item.explanation;
        const character = document.getElementById('character');
        //console.log(character);
        // Show the character when the correct answer is selected
        if (character) {
            character.style.display = 'block';
        }
    } else {
        answerSection.innerHTML = "<span'>Correct answer is </span> " + item.answer + ': ' + item.explanation;
    }
}

