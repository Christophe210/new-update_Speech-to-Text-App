




const checkButton = document.getElementById('checkButton');
const inputText = document.getElementById('inputText');
const startBtn = document.getElementById('startBtn');
const repeatagainButton = document.getElementById('repeatagainButton');
const nextlevelButton = document.getElementById('nextlevelButton');
const output = document.getElementById('output');
const levelDisplay = document.getElementById('level');
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
const synth = window.speechSynthesis;

function autoResize() {
    inputText.style.height = 'auto';
    inputText.style.height = (inputText.scrollHeight) + 'px';
}

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';


const levels = [
        "I am Christophe. I come from Rwanda. I like to learn new things. Today, I am learning English.",
        "I live in a small house. There are two rooms: a bedroom and a kitchen. It is cozy and comfortable.",
        "In the morning, I wake up. I brush my teeth and have breakfast. Then, I go to work or school.",
        "I enjoy eating rice and beans. Sometimes, I have fruits like bananas or oranges for a snack.",
        "On weekends, I relax. I might watch a movie, read a book, or spend time with friends and family.",
        "I have a pet cat. Its name is Whiskers. It is playful and loves to sleep in the sun.",
        "Learning English is exciting. I practice every day to improve my speaking and reading skills.",
        "For the next level's try to answer yourself, the question each level is asking. It will help you learning English fast. ",
        "Are you ready to answer the following question, YES or NOT",
        "Day1:   Take a nature walk and observe the trees, flowers, and birds. What colors do you see?",
        "Day2:   The market is a lively place. Vendors sell fruits, vegetables, and other goods. Describe the scene.",
        "Day4:   Buses and taxis help people get around. Share your thoughts on using public transportation.",
        "Day5:   Describe a typical day at your workplace or school. What do you enjoy about it?",
        "Day6:   Share your hobbies, whether it's reading, sports, or art. What do you love to do in your free time?",
        "Day7:   Explore and write about a traditional festival, dance, or celebration in Rwanda.",
        "Day8:   Create a headline for a local event or news story. Write a short paragraph about it.",
        "Day9:   Read an article on climate change. Share your thoughts on its impact and what we can do.",
        "Day10:   Discuss the role of technology in society. How has it changed our daily lives?",
        "Day11:   Explore tips for a healthy lifestyle. What small changes can you make for better health?",
        "Day12:   Write about the pros and cons of social media. How does it affect personal connections?",
        "Day13:   Share your thoughts on your favorite book or movie. What makes it special to you?",
        "Day14:   Describe your dream vacation destination. What activities would you do there?",
        "Day15:   If you were to start a blog, what topics would you write about? Share your blogging ideas.",
        "Day16:   In a small town, there's an old library with mysterious stories. Write about an adventure inside.",
        "Day17:   Learn about the importance of a balanced diet and share tips for maintaining healthy eating habits.",
        "Day18:   Imagine a garden where plants have magical powers. Create a story around this enchanting place.",
        "Day19:   Explore how music can influence emotions and share your favorite genre or song.",
        "Day20:   Write about a surprise visit from someone unexpected. How does it change the day?",
        "Day21:   Share your experience or thoughts on learning a new skill, whether it's a language, instrument, or sport.",
        "Day22:   Craft a story about an unlikely friendship. What brings two different characters together?",
        "Day23:   Share quotes that inspire you and explain why they resonate with you.",
        "Day24:   Read a short excerpt from a classic novel. Discuss the writing style and any unfamiliar words.",
        "Day25:   Explore a few English proverbs and sayings. Explain their meanings.",
        "Day26:   Read a simple poem and discuss the emotions or imagery it conveys.",
        "Day27:   Examine a part of a famous speech. Discuss the message and its relevance.",
        "Day28:   Take a dialogue from a favorite movie. Analyze the conversation and its impact.",
        "Day29:   Introduce and discuss a few idioms used in English. Create sentences with them.",
        "Day30:   Delve into the possibilities and challenges of artificial intelligence in the future.",
        "Day31:   Explore the importance of cultural diversity in today's interconnected world.",
        "Day32:   Discuss the transformative impact of education on individuals and societies.",
        "Day33:   Reflect on the global responsibility to address climate change and its consequences.",
        "Day34:   Examine the evolving role of women in different societies and cultures.",
        "Day35:   Explore the practice of mindfulness and its positive effects on mental health.",
        "Day36:   Discuss the challenges and opportunities presented by the rapid advancements in technology.",
        "Day37:   Create a story about a mysterious box and the adventures it leads to.",
        "Day38:   Write about the excitement and challenges of exploring a new city.",
        "Day39:   Imagine and write an interview with someone you admire as a role model.",
        "Day40:   Reflect on your day and write down three things you're grateful for.",
        "Day41:   Discuss the joy and impact of giving, whether it's time, kindness, or support.",
        "Day42:   Imagine having a time machine. Where and when would you go?",
        "Day43:   Explore strategies for maintaining a healthy work-life balance.",
        "Day44:   Read a short story or article and write a review, sharing your thoughts and recommendations.",
        "Day45:   Learn about a significant historical event and discuss its impact.",
        "Day46:   Share a personal story about overcoming challenges and building resilience.",
        "Day47:   Describe your dream career and the steps you'll take to achieve it.",
        "Day48:   Write a descriptive essay about a natural scene that inspires you.",
        "Day49:   Explore how art, whether visual or performing, can influence emotions and perspectives.",
        "Day50:   List three places you would love to visit and why.",
        "Day51:   Discuss the impact of technology on communication in the modern world.",
        "Day52:   Share a cherished memory from your childhood and why it's special to you.",
        "Day53:   Reflect on the joys and challenges of the learning process.",
        "Day54:   Pick a current event and debate its various perspectives.",
        "Day55:   Reflect on the progress you've made in your English reading journey.",
        "Day56:   Write about a personal achievement and celebrate your success.",
        "Day57:   Share tips and advice for others who are learning a new language.",
        "Day58:   Outline your goals for the future and the steps you'll take to achieve them.",
        "Day59:   Write a thank-you letter expressing gratitude to someone who has supported you.",
        "Day60:   Discuss why continuous learning is essential for personal and professional growth.",
        "Day61:   Compile a list of quotes that have inspired you throughout your learning journey.",
        "Day62:   Write a letter to yourself, outlining your aspirations and hopes for the future.",
        "Day63:   Reflect on the value of being part of a community of language learners.",
        "Day64:   Write brief how this Speech to Text App, help you in your learning English and share us to our email.",
        "Day65:   Write a closing reflection on your 65-question English learning challenge.",
        
    // Add more levels as needed
  ];

let currentLevel = 0;

levelDisplay.innerText = `Level ${currentLevel + 1}`;

repeatagainButton.onclick = function() {
    if (currentLevel > 0) {
        currentLevel--;
        levelDisplay.innerText = `Level ${currentLevel + 1}`;
        output.innerText = '';
        inputText.value = levels[currentLevel];
    }
};

nextlevelButton.onclick = function() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        levelDisplay.innerText = `Level ${currentLevel + 1}`;
        output.innerText = '';
        inputText.value = levels[currentLevel];
    } else {
        alert('Congratulations! You have completed all levels.');
    }
};

startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'Start Recording') {
        recognition.start();
        startBtn.textContent = 'Stop Recording';
    } else {
        recognition.stop();
        startBtn.textContent = 'Start Recording';
    }
});

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');

    output.textContent = transcript;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};



convertBtn.addEventListener('click', () => {

    const textToSpeak = inputText.value;
    if (textToSpeak.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
            alert('Error in speech synthesis. Please try again.');
        };
        synth.speak(utterance);
    } else {
        alert('Please enter text to convert.');
    }

   
//     // ... (your existing JavaScript code) ...

//     const frBtn = document.getElementById('frBtn');
//     const kinyarwandaBtn = document.getElementById('kinyarwandaBtn');

//     frBtn.addEventListener('click', () => setLanguage('fr-FR'));
//     kinyarwandaBtn.addEventListener('click', () => setLanguage('rw-RW'));

//     function setLanguage(languageCode) {
//         const utterance = new SpeechSynthesisUtterance();
//         utterance.lang = languageCode;
//     }

});

checkButton.onclick = function() {
    const userSpeech = output.textContent.trim();
    const expectedText = levels[currentLevel];

    if (userSpeech.toLowerCase() === expectedText.toLowerCase()) {
        alert('Correct! You can now move to the next level.');
        nextLevel();
    } else {
        alert('Incorrect. Please try again or use the "Repeat Level" button.');
    }
};

function nextLevel() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        levelDisplay.innerText = `Level ${currentLevel + 1}`;
        output.innerText = '';
        inputText.value = levels[currentLevel];
    } else {
        alert('Congratulations! You have completed all levels.');
    }
}

