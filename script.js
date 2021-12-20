// Define data
const students = [
    {
        "name" : "Adi Dzocaj",
        "image": "assets/images/students/adi-dzocaj.jpg",
    },
    {
        "name" : "Alexander Bergquist",
        "image": "assets/images/students/alexander-bergquist.jpg",
    },
    {
        "name" : "Alexander Kocman",
        "image": "assets/images/students/alexander-kocman.jpg",
    },
    {
        "name" : "Benjamin Benson",
        "image": "assets/images/students/benjamin-benson.jpg",
    },
    {
        "name" : "Benjamin Tsubarah",
        "image": "assets/images/students/benjamin-tsubarah.jpg",
    },
    {
        "name" : "Calle Nilsson",
        "image": "assets/images/students/calle-nilsson.jpg",
    },
    {
        "name" : "Chikage Takahashi Molander",
        "image": "assets/images/students/chikage-takahashi-molander.jpg",
    },
    {
        "name" : "Daniel Be",
        "image": "assets/images/students/daniel-be.jpg",
    },
    {
        "name" : "Daniel Carlsson",
        "image": "assets/images/students/daniel-carlsson.jpg",
    },
    {
        "name" : "Elin Ahlgren",
        "image": "assets/images/students/elin-ahlgren.jpg",
    },
    {
        "name" : "Emma Käck",
        "image": "assets/images/students/emma-kack.jpg",
    },
    {
        "name" : "Eric Ståhl",
        "image": "assets/images/students/eric-stahl.jpg",
    },
    {
        "name" : "Frans Gustavson Påsse",
        "image": "assets/images/students/frans-gustavson-passe.jpg",
    },
    {
        "name" : "Glafira Veretennikova",
        "image": "assets/images/students/glafira-veretennikova.jpg",
    },
    {
        "name" : "Gustaf Grönlund",
        "image": "assets/images/students/gustaf-gronlund.jpg",
    },
    {
        "name" : "Hanna Håkanson",
        "image": "assets/images/students/hanna-hakanson.jpg",
    },
    {
        "name" : "Heidi Sjöberg",
        "image": "assets/images/students/heidi-sjoberg.jpg",
    },
    {
        "name" : "Hugo Carzborn",
        "image": "assets/images/students/hugo-carzborn.jpg",
    },
    {
        "name" : "Jesper Kling",
        "image": "assets/images/students/jesper-kling.jpg",
    },
    {
        "name" : "Johan Ranestam",
        "image": "assets/images/students/johan-ranestam.jpg",
    },
    {
        "name" : "Johanna Bäckström",
        "image": "assets/images/students/johanna-backstrom.jpg",
    },
    {
        "name" : "Johanna Jönsson",
        "image": "assets/images/students/johanna-jonsson.jpg",
    },
    {
        "name" : "Jona Torsson",
        "image": "assets/images/students/jona-torsson.jpg",
    },
    {
        "name" : "Josefine Ahlstedt",
        "image": "assets/images/students/josefine-ahlstedt.jpg",
    },
    {
        "name" : "Julia Jespersdotter Högman",
        "image": "assets/images/students/julia-jespersdotter-hogman.jpg",
    },
    {
        "name" : "Julia Nemell",
        "image": "assets/images/students/julia-nemell.jpg",
    },
    {
        "name" : "Linus Lindberg",
        "image": "assets/images/students/linus-lindberg.jpg",
    },
    {
        "name" : "Malin Olsson",
        "image": "assets/images/students/malin-olsson.jpg",
    },
    {
        "name" : "Maria Haara-Lundhammar",
        "image": "assets/images/students/maria-haara-lundhammar.jpg",
    },
    {
        "name" : "Maria Lövgren",
        "image": "assets/images/students/maria-lovgren.jpg",
    },
    {
        "name" : "Nikola Dimitrijoski",
        "image": "assets/images/students/nikola-dimitrijoski.jpg",
    },
    {
        "name" : "Paulina Kiendys",
        "image": "assets/images/students/paulina-kiendys.jpg",
    },
    {
        "name" : "Raymond Lam",
        "image": "assets/images/students/raymond-lam.jpg",
    },
    {
        "name" : "Robin Karlsson",
        "image": "assets/images/students/robin-karlsson.jpg",
    },
    {
        "name" : "Sara Almqvist",
        "image": "assets/images/students/sara-almqvist.jpg",
    },
    {
        "name" : "Tim Nilsson",
        "image": "assets/images/students/tim-nilsson.jpg",
    },
    {
        "name" : "Tirapat Sukjit",
        "image": "assets/images/students/tirapat-sukjit.jpg",
    },
    {
        "name" : "Tobias Silfverberg",
        "image": "assets/images/students/tobias-silfverberg.jpg",
    },
    {
        "name" : "Wiktoria Dobrzewinska",
        "image": "assets/images/students/wiktoria-dobrzewinska.jpg",
    },
];

// Initialize 
let numberOfQuestions = 8;
let studentsSelection = [];
let score = 0;
let highscore = null;

// Declare element references
const questionsWrapperEl = document.querySelector('.questions-wrapper');
const quizFormEl = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('#submit-button');
const numberOfQuestionsEl = document.querySelector('#numberOfQuestions');
const scoreEl = document.querySelector('#score');
const resultsWrapperEl = document.querySelector('.results-wrapper');
const highScoreEl = document.querySelector('#high-score');
const newGameBtn = document.querySelector('#new-game-button');

// Declare event listeners
quizFormEl.addEventListener('submit', event => {
    event.preventDefault();
    submitBtn.disabled = true;
    correctAnswers = studentsSelection.map(student => student.name);
    let nodes = document.querySelectorAll('input[type=radio]:checked');
    let userAnswers = [...nodes].map(node => node.value);
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score++;
            quizFormEl.querySelector(`input[name=questionIndex${index}]:checked`).classList.add('is-valid');
            if (highscore) {
                if (score > highscore) {
                    highscore = score;
                } else {
                }
            } else {
                highscore = score;
            }
        } else {
            quizFormEl.querySelector(`input[name=questionIndex${index}]:checked`).classList.add('is-invalid');
        }
    });

    scrollTo(0,0);
    scoreEl.textContent = score;
    numberOfQuestionsEl.textContent = numberOfQuestions;
    highScoreEl.textContent = highscore;
    resultsWrapperEl.classList.remove('d-none');
});

newGameBtn.addEventListener('click', event => {
    resultsWrapperEl.classList.add('d-none');
    submitBtn.disabled = false;
    score = 0;
    startGame();
});

// Implement functions
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const getRandomStudents = (array) => {
    shuffleArray(array);
    const randomStudents = array.slice(0, numberOfQuestions);
    return randomStudents;
};

const addRandomizedOptions = (array) => {
    array.forEach(element => {
        const correctName = element.name;
        const filtered = students.filter(student => {
            return student.name !== correctName;
        });
        shuffleArray(filtered);
        const options = filtered
            .slice(0, 3)
            .map(student => student.name);
        options.push(correctName);
        shuffleArray(options);
        element.options = options;
    });
};

const renderQuestions = (array) => {
    questionsWrapperEl.innerHTML = array.map((student, index) => `
        <div id="question" class="col-sm-12 col-md-6 col-lg-3 p-2">
            <div class="border rounded">
                <div class="image-wrapper p-4">
                    <img src="${student.image}" class="img-fluid rounded-circle" alt="${student.name}">
                </div>
                <div class="options-wrapper bg-secondary border rounded p-2 m-3 ">
                ${(student.options).map(option => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="questionIndex${index}" id="${option}_${index}" value="${option}" autocomplete="off" required>
                        <label class="form-check-label" for="${option}_${index}">${option}</label>
                    </div>
                    `).join('')} 
                </div>
            </div>
        </div>
    `).join('');
};

// Program loop is defined here
const startGame = () => {
    studentsSelection = getRandomStudents(students);
    addRandomizedOptions(studentsSelection);
    renderQuestions(studentsSelection);
};

// Run program
startGame();