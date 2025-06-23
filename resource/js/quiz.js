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
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Teknologi Internet of Things (IoT) digunakan dalam pengelolaan lingkungan untuk:",
        answers: [
            "Mengontrol pertumbuhan tanaman secara otomatis",
            "Menambah jejak karbon di lingkungan",
            "Mengurangi penggunaan energi terbarukan",
            "Meningkatkan kebutuhan plastik"
        ],
        correctAnswer: 0,
        explanation: "IoT memanfaatkan sensor-sensor yang terhubung internet untuk mengumpulkan data real-time, misalnya dalam irigasi pintar, pengelolaan limbah, dan pemantauan kualitas udara",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Salah satu manfaat utama dari penggunaan Sistem Informasi Geografis (SIG) dalam pengelolaan lingkungan adalah:",
        answers: [
            "Membuat polusi semakin meningkat",
            "Menghitung pendapatan perusahaan",
            "Memetakan kerusakan hutan dan perubahan tutupan lahan",
            "Mengurangi kebutuhan edukasi lingkungan"
        ],
        correctAnswer: 2,
        explanation: "SIG membantu memetakan dan menganalisis data spasial, seperti deforestasi, banjir, polusi, hingga konservasi habitat. Data ini penting untuk pengambilan keputusan.",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Teknologi apa yang dapat mengurangi polusi udara di kota besar?",
        answers: [
            "Kendaraan dengan bahan bakar pertamax",
            "Pabrik pembakar batubara",
            "Diesel generator",
            "Mobil listrik"
        ],
        correctAnswer: 3,
        explanation: "Penggunaan kendaraan listrik, sistem transportasi publik cerdas, filter udara, serta peralihan dari energi fosil ke energi bersih membantu menekan polusi.",
        articleUrl: "page/artikel-1.html"
    },
    {
        question: "Salah satu dampak negatif penggunaan teknologi informasi terhadap lingkungan adalah?",
        answers: [
            "Penggunaan energi hijau",
            "Meningkatkan efisiensi produksi",
            "Konservasi lahan",
            "Limbah elektronik (e-waste)"
        ],
        correctAnswer: 3,
        explanation: "Perangkat elektronik yang usang menghasilkan limbah elektronik (e-waste) yang berbahaya jika tidak didaur ulang dengan benar, mengandung bahan beracun seperti timbal, merkuri, dan kadmium.",
        articleUrl: "page/artikel-2.html"
    },
    {
        question: "Apa manfaat pemanfaatan kecerdasan buatan (AI) dalam pengelolaan lingkungan?",
        answers: [
            "Membantu memprediksi bencana alam secara lebih akurat",
            "Menambah volume limbah elektronik",
            "Mempercepat penebangan hutan liar",
            "Meningkatkan polusi udara di perkotaan"
        ],
        correctAnswer: 0,
        explanation: "AI dapat menganalisis data cuaca, gempa, maupun tsunami untuk memberikan prediksi dini, mempercepat respon bencana, dan mengurangi korban.",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Mengapa data satelit penting dalam pemantauan perubahan iklim?",
        answers: [
            "Tidak berguna karena datanya tidak akurat",
            "Dapat memberikan informasi tentang suhu, tutupan es, dan polusi secara global",
            "Hanya digunakan untuk keperluan militer",
            "Mempercepat eksploitasi sumber daya alam"
        ],
        correctAnswer: 1,
        explanation: "Satelit mengumpulkan data atmosfer, suhu, tutupan es, kelembaban tanah, dan tingkat karbon di atmosfer, penting untuk riset iklim.",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Manakah berikut ini contoh penggunaan teknologi ramah lingkungan?",
        answers: [
            "Solar panel untuk menghasilkan listrik",
            "Pabrik berbahan bakar batubara",
            "Kendaraan diesel tua",
            "Generator berbahan bakar bensin"
        ],
        correctAnswer: 0,
        explanation: "Solar panel, turbin angin, dan bioenergi mengurangi ketergantungan pada bahan bakar fosil, menekan emisi karbon.",
        articleUrl: "page/artikel-2.html"
    },
    {
        question: "Bagaimana teknologi blockchain berkontribusi pada pengelolaan lingkungan?",
        answers: [
            "Mempercepat reboisasi",
            "Mencatat data lingkungan secara transparan dan tidak dapat diubah",
            "Menyembunyikan data limbah industri dari publik",
            "Meningkatkan penggunaan kertas untuk dokumentasi"
        ],
        correctAnswer: 1,
        explanation: "Blockchain mencatat data lingkungan secara permanen, transparan, dan tidak bisa dimanipulasi, mendukung kepercayaan publik dalam laporan keberlanjutan dan pengawasan emisi karbon.",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: "Bagaimana teknologi cloud computing dapat mendukung upaya pelestarian lingkungan?",
        answers: [
            "Meningkatkan konsumsi perangkat keras individu",
            "Mengurangi penggunaan energi dengan konsolidasi server",
            "Memperbanyak cetakan dokumen kertas",
            "Mempercepat penambangan bahan tambang"
        ],
        correctAnswer: 1,
        explanation: "Cloud computing memungkinkan penyimpanan dan pemrosesan data dilakukan di pusat data bersama (shared data center) yang lebih efisien dalam penggunaan energi daripada ribuan server lokal. Ini mengurangi konsumsi energi total dan emisi karbon.",
        articleUrl: "page/artikel-3.html"
    },
    {
        question: ".Mengapa Green IT penting bagi perusahaan dalam hal perubahan iklim?",
        answers: [
            "Karena Green IT memungkinkan perusahaan untuk meningkatkan emisi gas rumah kaca.",
            "Karena Green IT membantu perusahaan melacak dan mengurangi emisi gas rumah kaca serta limbah elektronik beracun.",
            "Karena Green IT hanya berfokus pada peningkatan keuntungan tanpa mempertimbangkan dampak lingkungan.",
            "Karena Green IT membebaskan perusahaan dari kewajiban untuk mematuhi regulasi lingkungan."
        ],
        correctAnswer: 1,
        explanation: "Karena Green IT membantu perusahaan melacak dan mengurangi emisi gas rumah kaca serta limbah elektronik beracun.",
        articleUrl: "page/artikel-4.html"
    },
    {
        question: "Apa tujuan utama dari Green IT (teknologi informasi hijau)",
        answers: [
            "Untuk meningkatkan penggunaan bahan berbahaya dalam produk TI.",
            "Untuk memaksimalkan konsumsi energi pada seluruh siklus hidup produk.",
            "Untuk meminimalkan efek negatif operasi TI terhadap lingkungan.",
            "Untuk mengurangi biodegradabilitas produk yang tidak terpakai."
        ],
        correctAnswer: 2,
        explanation: "Untuk meminimalkan efek negatif operasi TI terhadap lingkungan.",
        articleUrl: "page/artikel-5.html"
    },
    {
        question: "Apa yang diharapkan akan dilakukan oleh peraturan baru dari U.S. Securities and Exchange Commission dan European Union's Corporate Sustainability Reporting Directive terkait praktik komputasi hijau?",
        answers: [
            "Mendorong perusahaan untuk mengabaikan dampak lingkungan dari operasi TI mereka.",
            "Mewajibkan perusahaan untuk meningkatkan emisi gas rumah kaca mereka.",
            "Menghasilkan minat yang lebih besar dalam penerapan praktik komputasi hijau.",
            "Mengurangi kebutuhan perusahaan untuk memperbarui infrastruktur TI mereka."
        ],
        correctAnswer: 2,
        explanation: "Menghasilkan minat yang lebih besar dalam penerapan praktik komputasi hijau.",
        articleUrl: "page/artikel-4.html"
    },
    {
        question: "Apa tujuan utama yang dapat ditetapkan oleh organisasi TI terkait praktik ramah lingkungan?",
        answers: [
            "Meningkatkan konsumsi daya untuk mendukung pertumbuhan infrastruktur.",
            "Memaksimalkan penggunaan sumber daya tak terbarukan untuk efisiensi biaya.",
            "Mengabaikan jejak karbon untuk fokus pada inovasi teknologi.",
            "Mengurangi dampak lingkungan dengan menetapkan standar dan regulasi yang ramah lingkungan."
        ],
        correctAnswer: 3,
        explanation: "Mengurangi dampak lingkungan dengan menetapkan standar dan regulasi yang ramah lingkungan.",
        articleUrl: "page/artikel-4.html"
    },
    {
        question: "Berikut ini yang BUKAN merupakan solusi Green IT adalah?",
        answers: [
            "Menggunakan energi terbarukan",
            "Mengoptimalkan penggunaan pusat data",
            "Mengganti perangkat elektronik setiap tahun",
            "Mendaur ulang perangkat lama"
        ],
        correctAnswer: 2,
        explanation: "Mengganti perangkat elektronik setiap tahun.",
        articleUrl: "page/artikel-5.html"
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

// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });
        // Optional: close menu when link clicked (mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                navLinks.classList.remove('active');
            });
        });
    }
});