// artikel.js - JavaScript untuk halaman artikel

// Data artikel (simulasi database)
const artikelData = [
    {
        id: 1,
        judul: "Sampah Plastik",
        emoji: "🗑️",
        deskripsi: "Memahami dampak sampah plastik terhadap lingkungan",
        file: "/page/artikel-1.html"
    },
    {
        id: 2,
        judul: "Energi Hijau", 
        emoji: "⚡",
        deskripsi: "Mengenal berbagai jenis energi terbarukan",
        file: "/page/artikel-2.html"
    }
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