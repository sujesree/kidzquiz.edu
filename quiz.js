// Sample data
let username;
const data1 = [
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

const data = [
    {
        question: "How is a rainbow formed?",
        options: ["Refraction of sunlight through water droplets", "Reflection of sunlight", "Diffraction of sunlight", "Absorption of sunlight"],
        answer: "Refraction of sunlight through water droplets",
        shortexplain: "A rainbow is formed by the refraction of sunlight through water droplets in the atmosphere.",
        explanation: "<br><br> You know how when you look at a glass of water from the side, it sometimes looks bent or distorted? That's because light changes direction a little bit when it goes from the air into the water. This bending of light is called refraction."
            + "<br><br>Now, imagine that sunlight (which is made up of different colors like red, orange, yellow, green, blue, and violet) goes through a raindrop. As the different colors enter and leave the raindrop, they bend or refract in slightly different ways. This causes the colors to separate from each other.When this happens in millions of raindrops in the sky, you see the separated colors arranged in an arc, creating a beautiful rainbow!"
            + "<br><br>The view of the rainbow is so unique and is different for every person<br><br>"
            + "<a href='https://www.youtube.com/watch?v=nCPPLhPTAIk' target='_blank'>Video Explanation</a>"
    },
    {
        question: "How are clouds formed?",
        options: ["Condensation of water vapor", "Evaporation of liquid water", "Freezing of water droplets", "Melting of ice crystals"],
        answer: "Condensation of water vapor",
        shortexplain: "Clouds are formed by the condensation of water vapor in the atmosphere.",
        explanation: "<br><br>Have you ever noticed steam coming from a boiling pot of water? That's water vapor, which is water in a gas form. When the vapor cools down, it turns back into tiny water droplets. This process is called condensation.<br><br>"
            + "<a href='https://www.youtube.com/watch?v=e2JMt_YJveM' target='_blank'>Video Explanation</a>"
    },
    {
        question: "Why do we see stars twinkle?",
        options: ["Because they are far away", "Due to atmospheric disturbances", "As they move closer to us", "All of the above"],
        answer: "All of the above",
        shortexplain: "Stars twinkle because they are far away and their light has to travel through our atmosphere, which causes it to bend and change.",
        explanation: "<br><br>Ever notice how stars seem to dance in the night sky? They don't really move—they just appear to. This twinkling effect is caused by something called atmospheric refraction. When starlight enters our atmosphere, it bends slightly. Since the air near the ground is denser than the air higher up, the light bends more as it gets closer to the ground. This bending changes the direction of the light reaching our eyes, making the stars twinkle.<br><br>"
            + "Stars are so far away that their light takes thousands of years to reach us. So, when you see them twinkling, remember that you're seeing a glimpse of the past!<br><br>"
            + "<a href='https://www.youtube.com/watch?v=iaIsYaKHOug' target='_blank'>Video Explanation</a>"
    },
    {
        question: "Does the sun rise or sunset?",
        options: ["The Sun rises", "The Sun sets", "Both", "Neither"],
        answer: "Neither",
        shortexplain: "The Sun itself does not rise or set; it is the Earth's rotation that creates the illusion.",
        explanation: "The Sun itself does not rise or set. It is the Earth's rotation on its axis that makes it appear as if the Sun is rising in the morning and setting in the evening.<br><br>The Earth rotates on its axis once every 24 hours. As the Earth rotates, different parts of its surface face towards the Sun. When the part of the Earth you are standing on rotates into the direct line of the Sun's rays, it appears as if the Sun is rising above the horizon in the morning. This is called sunrise.<br><br>Similarly, as the Earth continues to rotate, the part you are standing on rotates away from the direct line of the Sun's rays. The Sun appears to sink below the horizon, and this is called sunset.<br><br>So, the Sun itself does not actually move. It is the Earth's rotation that creates the illusion of the Sun rising and setting each day.<br><br>"
            + "<a href='https://www.youtube.com/watch?v=CGwbFc6sRHk' target='_blank'>Video Explanation</a>"
    },
    {
        question: "Why is the apple red in color?",
        options: ["Presence of anthocyanin pigment and reflection of red light", "Genetic variation", "All of the above"],
        answer: "Presence of anthocyanin pigment and reflection of red light",
        shortexplain: "Anthocyanin pigment is responsible for the red color and it is the reflection of red light (and absorption of other colors) that determines how we perceive that color.",
        explanation: "<br><br>The red color of apples comes from a special type of pigment called anthocyanin.This pigment is what makes many fruits and vegetables red, blue, or purple. As an apple ripens, the amount of anthocyanin increases, changing the apple's color from green to red. This process is influenced by environmental factors like light and temperature.<br><br>The red appearance of the apple is due to the way it interacts with light. The pigments in the apple skin absorb most wavelengths of light except for the red wavelengths, which are reflected. This reflected red light is what we perceive with our eyes, giving the apple its red color.<br><br>.So, while the pigment anthocyanin is responsible for the red color, it is the reflection of red light (and absorption of other colors) that determines how we perceive that color.<br><br>"
            + "<a href='https://www.youtube.com/watch?v=HnkyxU17Q8M' target='_blank'>Video Explanation</a>"
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
    const butterflyAnimation = document.getElementById('butterflyAnimation');
    const butterflyAnimation1 = document.getElementById('butterflyAnimation1');
    butterflyAnimation.style.display = 'none';
    butterflyAnimation1.style.display = 'none';
    // Get the greeting element
    var greeting = document.getElementById('greeting');
    var parent = greeting.parentElement;

    // Set the greeting text
    var greetingText = 'Hi ' + username + ', Let us start the quiz...';
    var i = 0;

    // Show the greeting with a typing animation
    greeting.style.display = 'block';
    parent.style.display = 'block';
    greeting.style.fontFamily = "'Princess Sofia', cursive";

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


    // const butterflyAnimation = document.getElementById('butterflyAnimation');
    // butterflyAnimation.style.display = 'block';

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
                this.classList.add('fade-in');
                setTimeout(() => {
                    this.classList.remove('fade-in');
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

            const para = document.createElement('p');
            para.textContent = 'So ' + username + ',What did we learn today?';
            para.style.fontFamily = "'Lugrasimo', cursive";
            para.style.fontSize = 'x-large';
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
                    div.style.fontFamily = "'Lugrasimo', cursive";
                    div.style.fontSize = 'medium';
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

