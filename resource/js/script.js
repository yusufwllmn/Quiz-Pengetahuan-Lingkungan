function startQuiz() {
    // Redirect ke halaman quiz start
    window.location.href = 'quiz-start.html';
}

// Fungsi untuk mulai quiz sesungguhnya dari halaman quiz-start
function startActualQuiz() {
    window.location.href = 'quiz.html';
}

// Fungsi untuk kembali ke home dari halaman quiz-start
function goToHome() {
    window.location.href = 'index.html';
}

// Fungsi untuk menampilkan section About di halaman home
function showAbout() {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
        aboutSection.style.display = 'block';
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fungsi untuk menyembunyikan section About di halaman home
function hideAbout() {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
        aboutSection.style.display = 'none';
    }
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default for actual page links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Handle navigation
            const href = this.getAttribute('href');
            
            if (href === '#home') {
                // Already on home page or redirect to home
                if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
                    window.location.href = 'index.html';
                }
            } else if (href === '#quiz') {
                startQuiz();
            } else if (href === '#artikel') {
                alert('Halaman artikel akan segera tersedia!');
            }
        });
    });

    // Add entrance animation delay
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        const quizStartContainer = document.querySelector('.quiz-start-container');
        
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
        
        if (quizStartContainer) {
            quizStartContainer.style.opacity = '1';
        }
    }, 100);

    // Add hover effects to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation to buttons
    const buttons = document.querySelectorAll('.start-button, .start-quiz-button, .back-home-button, .next-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Smooth scrolling for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});