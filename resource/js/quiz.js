// Quiz Database
const quizDatabase = [
    {
        question: "Apa peran utama teknologi dalam pengelolaan lingkungan?",
        answers: [
            "Meningkatkan produksi limbah industri",
            "Mempermudah eksploitasi sumber daya alam",
            "Memantau dan mengelola dampak lingkungan",
            "Meningkatkan konsumsi energi fosil"
        ],
        correctAnswer: 2,
        explanation: "Teknologi membantu manusia memantau kondisi lingkungan (seperti kualitas udara, air, cuaca), memproses data lingkungan (misalnya, sistem pemodelan iklim), dan mengembangkan solusi (misalnya, energi terbarukan, kendaraan listrik).",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Teknologi Internet of Things (IoT) digunakan dalam pengelolaan lingkungan untuk:",
        answers: [
            "Mengontrol pertumbuhan tanaman secara otomatis",
            "Menambah emisi karbon di atmosfer",
            "Mengurangi penggunaan energi terbarukan",
            "Meningkatkan kebutuhan plastik"
        ],
        correctAnswer: 0,
        explanation: "IoT memanfaatkan sensor-sensor yang terhubung internet untuk mengumpulkan data real-time, misalnya dalam irigasi pintar, pengelolaan limbah, dan pemantauan kualitas udara",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Duis aute irure dolor in reprehenderit in voluptate velit esse?",
        answers: [
            "Cillum dolore eu fugiat",
            "Nulla pariatur excepteur",
            "Sint occaecat cupidatat",
            "Non proident sunt"
        ],
        correctAnswer: 2,
        explanation: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "At vero eos et accusamus et iusto odio dignissimos ducimus?",
        answers: [
            "Qui blanditiis praesentium",
            "Voluptatum deleniti atque",
            "Corrupti quos dolores",
            "Et quas molestias excepturi"
        ],
        correctAnswer: 1,
        explanation: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Temporibus autem quibusdam et aut officiis debitis aut rerum?",
        answers: [
            "Necessitatibus saepe eveniet",
            "Ut et voluptates repudiandae",
            "Sint et molestiae non",
            "Recusandae itaque earum"
        ],
        correctAnswer: 0,
        explanation: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem?",
        answers: [
            "Accusantium doloremque laudantium",
            "Totam rem aperiam",
            "Eaque ipsa quae",
            "Ab illo inventore"
        ],
        correctAnswer: 3,
        explanation: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit?",
        answers: [
            "Amet consectetur adipisci",
            "Velit sed quia non",
            "Numquam eius modi",
            "Tempora incidunt ut"
        ],
        correctAnswer: 2,
        explanation: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
        articleUrl: "/page/artikel-1.html"
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answers: [
            "Corporis suscipit laboriosam",
            "Nisi ut aliquid ex",
            "Ea commodi consequatur",
            "Quis autem vel eum"
        ],
        correctAnswer: 0,
        explanation: "Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "Quis autem vel eum iure reprehenderit qui in ea voluptate?",
        answers: [
            "Velit esse quam nihil",
            "Molestiae consequatur vel",
            "Illum qui dolorem eum",
            "Fugiat quo voluptas"
        ],
        correctAnswer: 1,
        explanation: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "Et harum quidem rerum facilis est et expedita distinctio?",
        answers: [
            "Nam libero tempore",
            "Cum soluta nobis",
            "Est eligendi optio",
            "Cumque nihil impedit"
        ],
        correctAnswer: 2,
        explanation: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "Itaque earum rerum hic tenetur a sapiente delectus?",
        answers: [
            "Ut aut reiciendis voluptatibus",
            "Maiores alias consequatur",
            "Aut perferendis doloribus",
            "Asperiores repellat"
        ],
        correctAnswer: 3,
        explanation: "Maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "On the other hand, we denounce with righteous indignation?",
        answers: [
            "Dislike men who are",
            "So beguiled and demoralized",
            "By the charms of pleasure",
            "Of the moment so blinded"
        ],
        correctAnswer: 0,
        explanation: "These cases are perfectly simple and easy to distinguish in a free hour.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "In a free hour, when our power of choice is untrammelled?",
        answers: [
            "When nothing prevents",
            "Our being able to do",
            "What we like best",
            "Every pleasure is to be welcomed"
        ],
        correctAnswer: 3,
        explanation: "Every pleasure is to be welcomed and every pain avoided but in certain circumstances.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "But in certain circumstances and owing to the claims of duty?",
        answers: [
            "Or the obligations of business",
            "It will frequently occur",
            "That pleasures have to be repudiated",
            "And annoyances accepted"
        ],
        correctAnswer: 2,
        explanation: "The wise man therefore always holds in these matters to this principle of selection.",
        articleUrl: "/page/artikel-2.html"
    },
    {
        question: "The wise man therefore always holds in these matters?",
        answers: [
            "To this principle of selection",
            "He rejects pleasures to secure",
            "Other greater pleasures",
            "Or else he endures pains"
        ],
        correctAnswer: 0,
        explanation: "He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        articleUrl: "/page/artikel-2.html"
    }
];

// Quiz State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false;

// Initialize Quiz
function initializeQuiz() {
    // Select 10 random questions from the database
    currentQuestions = getRandomQuestions(quizDatabase, 10);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    hasAnswered = false;
    
    // Hide quiz complete section
    document.getElementById('quizComplete').style.display = 'none';
    
    // Show question section
    document.querySelector('.question-section').style.display = 'block';
    
    // Load first question
    loadQuestion();
}

// Get random questions from database
function getRandomQuestions(database, count) {
    const shuffled = [...database].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Load current question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Update question number and score
    document.getElementById('questionNumber').textContent = `Soal ${currentQuestionIndex + 1} dari ${currentQuestions.length}`;
    document.getElementById('scoreDisplay').textContent = `Skor: ${score}/100`;
    
    // Load question text
    document.getElementById('questionText').textContent = question.question;
    
    // Load answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        answerElement.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        answerElement.onclick = () => selectAnswer(index);
        answersContainer.appendChild(answerElement);
    });
    
    // Hide feedback section
    document.getElementById('feedbackSection').style.display = 'none';
    
    // Reset state
    selectedAnswer = null;
    hasAnswered = false;
}

// Select answer
function selectAnswer(answerIndex) {
    if (hasAnswered) return;
    
    selectedAnswer = answerIndex;
    const question = currentQuestions[currentQuestionIndex];
    const answerOptions = document.querySelectorAll('.answer-option');
    
    // Disable all options
    answerOptions.forEach(option => option.classList.add('disabled'));
    
    // Mark selected answer
    answerOptions[answerIndex].classList.add('selected');
    
    // Check if answer is correct
    const isCorrect = answerIndex === question.correctAnswer;
    
    // Mark correct and incorrect answers
    answerOptions[question.correctAnswer].classList.add('correct');
    if (!isCorrect) {
        answerOptions[answerIndex].classList.add('incorrect');
    }
    
    // Update score
    if (isCorrect) {
        score += 10; // 10 points per correct answer (max 100)
        document.getElementById('scoreDisplay').textContent = `Skor: ${score}/100`;
    }
    
    // Show feedback
    showFeedback(isCorrect, question);
    
    hasAnswered = true;
}

// Show feedback
function showFeedback(isCorrect, question) {
    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const explanation = document.getElementById('explanation');
    const articleLink = document.getElementById('articleLink');
    
    // Set feedback message
    if (isCorrect) {
        feedbackMessage.textContent = '✅ Jawaban Benar!';
        feedbackMessage.className = 'feedback-message correct';
    } else {
        feedbackMessage.textContent = '❌ Jawaban Salah!';
        feedbackMessage.className = 'feedback-message incorrect';
        
        // Show correct answer
        const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
        const correctAnswerText = question.answers[question.correctAnswer];
        feedbackMessage.textContent += ` Jawaban yang benar adalah ${correctAnswerLetter}. ${correctAnswerText}`;
    }
    
    // Set explanation
    explanation.textContent = question.explanation;
    
    // Set article link
    articleLink.innerHTML = `<a href="${question.articleUrl}" target="_blank">📖 Baca artikel terkait</a>`;
    
    // Show feedback section
    feedbackSection.style.display = 'block';
    
    // Update next button text
    const nextButton = document.getElementById('nextButton');
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextButton.textContent = 'Lihat Hasil';
    } else {
        nextButton.textContent = 'Soal Selanjutnya';
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showQuizComplete();
    }
}

// Show quiz complete
function showQuizComplete() {
    // Hide question section
    document.querySelector('.question-section').style.display = 'none';
    
    // Show quiz complete section
    const quizComplete = document.getElementById('quizComplete');
    quizComplete.style.display = 'block';
    
    // Set final score
    document.getElementById('finalScore').textContent = `${score}/100`;
    
    // Set score message based on performance
    const scoreMessage = document.getElementById('scoreMessage');
    let message = '';
    
    if (score >= 90) {
        message = '🌟 Luar biasa! Anda memiliki pengetahuan lingkungan yang sangat baik!';
    } else if (score >= 70) {
        message = '👍 Bagus! Pengetahuan lingkungan Anda cukup baik, terus belajar!';
    } else if (score >= 50) {
        message = '📚 Lumayan! Masih ada ruang untuk meningkatkan pengetahuan lingkungan Anda.';
    } else {
        message = '💪 Jangan menyerah! Mari belajar lebih banyak tentang lingkungan hidup.';
    }
    
    scoreMessage.textContent = message;
}

// Go to home page
function goHome() {
    window.location.href = 'index.html';
}

// Retry quiz
function retryQuiz() {
    initializeQuiz();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});