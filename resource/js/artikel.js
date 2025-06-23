// artikel.js - JavaScript untuk halaman artikel

// Data artikel (simulasi database)
const artikelData = [
    {
        id: 1,
        judul: "Pengaruh Perkembangan Teknologi Informasi Lingkungan",
        emoji: "🌱💻",
        deskripsi: "Pengaruh perkembangan IT pada lingkungan.",
        file: "page/artikel-1.html",
    },
    {
        id: 2,
        judul: "Perkembangan Teknologi & Keberlanjutan Lingkungan",
        emoji: "📚",
        deskripsi: "Mengenal tentang keberlanjutan lingkungan dan teknologi.",
        file: "page/artikel-2.html",
    },
    {
        id: 3,
        judul: "Enabling Green IOT",
        emoji: "🌱",
        deskripsi: "Mengenal tentang Green IOT",
        file: "page/artikel-3.html",
    },
    {
        id: 4,
        judul: "Towards Sustainable Development A Review of Green",
        emoji: "🛠️",
        deskripsi: "Mengenal lebih jauh isu energi terbarukan, teknologi lingkungan, atau pembangunan berkelanjutan.",
        file: "page/artikel-4.html",
    },
    {
        id: 5,
        judul: "Apa itu Green IT?",
        emoji: "💻🌍",
        deskripsi: "Definisi dan mengenal Green IT.",
        file: "page/artikel-5.html",
    },
];

// Fungsi untuk memuat daftar artikel
function loadArtikelList() {
    const artikelList = document.getElementById('artikelList');
    
    if (!artikelList) return;
    
    // Bersihkan container
    artikelList.innerHTML = '';
    
    // Buat card untuk setiap artikel
    artikelData.forEach(artikel => {
        const artikelCard = createArtikelCard(artikel);
        artikelList.appendChild(artikelCard);
    });
}

// Fungsi untuk membuat card artikel
function createArtikelCard(artikel) {
    const card = document.createElement('div');
    card.className = 'artikel-card';
    card.onclick = () => navigateToArtikel(artikel.file);
    
    card.innerHTML = `
        <div class="artikel-card-content">
            <div class="artikel-emoji">${artikel.emoji}</div>
            <h3 class="artikel-card-title">${artikel.judul}</h3>
            <p class="artikel-card-description">${artikel.deskripsi}</p>
            <div class="artikel-card-arrow">→</div>
        </div>
    `;
    
    return card;
}

// Fungsi untuk navigasi ke halaman artikel
function navigateToArtikel(filename) {
    window.location.href = filename;
}

// Event listener untuk memuat halaman
document.addEventListener('DOMContentLoaded', function() {
    // Load artikel list jika ada
    loadArtikelList();
    
    // Add entrance animation
    setTimeout(() => {
        const artikelContainer = document.querySelector('.artikel-container');
        if (artikelContainer) {
            artikelContainer.style.opacity = '1';
        }
    }, 100);
    
    // Add hover animations to artikel cards
    setTimeout(() => {
        const artikelCards = document.querySelectorAll('.artikel-card');
        artikelCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }, 200);
});

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