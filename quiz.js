// Sample data
const data = [
    {
        question: "Q1:What is the color of the Sun",
        options: ["Red", "Yellow", "White", "Orange"],
        answer: "White",
        explanation: "<br><br> The Sun is white in color.<br><br>"
            + "Sunlight is made up of all the colors in the rainbow like Red,Orange,Yellow,Green,Blue,Indigo,Violet.<br><br>"
    },
    {
        question: "Q2: Which planet is responsible for making the sky blue?",
        options: ["Moon", "Sun", "Earth", "Mars"],
        answer: "Sun",
        explanation: "<br><br> The sky appears blue because of the way sunlight interacts with the gases in the Earth's atmosphere.<br><br>"
            + "Sunlight is made up of all the colors in the rainbow. When the sunlight enters the Earth's atmosphere, it collides with tiny gas molecules like oxygen and nitrogen and all the other colors is allowed to enter except blue and purple <br><br>"
            + "So,the blue light is scattered everywhere in the atomosphere and hence blue color is visible to the human eyes <br><br>"
            + "<a href='https://www.youtube.com/watch?v=ehUIlhKhzDA' target='_blank'>Video Explanation</a>"
    },
    {
        question: "Q3: Which is the following is NOT a Vegetable?",
        options: ["Tomato", "Carrot", "Spinach", "Cucumber"],
        answer: "Tomato",
        explanation: "<br><br>Tomato is NOT a vegetable, it is a fruit.<br><br>"
            + "Tomatoes are fruits because they develop from the ovary of a flowering plant and contain seeds.<br><br>"
    },
    {
        question: "Q4: Which is the following is NOT a Tree?",
        options: ["Cocunut", "Banana", "Mango", "Banyan"],
        answer: "Banana",
        explanation: "<br><br>Banana is NOT a Tree, it is a fruit.<br><br>"
            + "Although commonly referred to as banana trees, banana plants are technically classified as large herbs or herbaceous plants, not trees.<br><br>"
            + "Bananas dont have any branches or trunks<br><br>"
    },
    {
        question: "Q5: Which planet is responsible for causing tides on beach?",
        options: ["Sun", "Jupiter", "Earth", "Moon"],
        answer: "Moon",
        explanation: "<br><br>You know how the Moon looks like it's following you when you're in the car? That's because the Moon is actually orbiting or going around the Earth. The Moon has a strong pulling force called gravity that tugs on everything, even the oceans!<br><br>"
            + "Imagine the Earth and the Moon playing a game of tug-of-war with the ocean. The Moon's gravity pulls on the water, making a bulge on the side of the Earth closest to the Moon. At the same time, the Earth's gravity pulls on the water, causing another bulge on the opposite side. These bulges create the high tides.<br><br>"
            + "When the Moon moves around the Earth, the bulges move too, causing the tides to go in and out. So, it's like a big cosmic dance between the Earth, the Moon, and the ocean!.<br><br>"
            + "So, the Moon is the main reason why we have tides on Earth. The Sun helps out a little bit, too!<br><br>"
            + "<a href='https://youtube.com/shorts/rKC1nR1d2jA?si=TerPijjftkGPe4RY' target='_blank'>Video Explanation1</a><br><br>"
            + "<a href='https://www.youtube.com/watch?v=3RdkXs8BibE' target='_blank'>Video Explanation2</a>"
    },
    // Add more questions as needed
];

window.onload = function () {
    const questionSection = document.getElementById('question-section');
    const answerSection = document.getElementById('answer-section');



    data.forEach((item, index) => {
        const question = document.createElement('p');
        question.textContent = item.question;
        questionSection.appendChild(question);

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
                //handleRadioChange(option, item, answerSection);
                if (option === item.answer) {
                    answerSection.innerHTML = "<span style='color: green;'>Correct answer!</span> " + item.answer + ': ' + item.explanation;
                    const character = document.getElementById('character');
                    console.log(character);
                    // Show the character when the correct answer is selected
                    character.style.display = 'block';
                    setTimeout(function () {
                        character.style.display = 'none';
                    }, 2000);
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
        questionSection.appendChild(form);
    });
};

// Add the background changing code here
//var images = ['images/background/1.jpg', 'images/background/2.jpg', 'images/background/3.jpg', 'images/background/4.jpg', 'images/background/5.jpg'];
var images = ['images/background/9.jpg'];
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

changeBackground();


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