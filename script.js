// ===============================
// MASUK KE UNDANGAN
// ===============================
document.getElementById('enterBtn').addEventListener('click', () => {
    const landing = document.getElementById('landing-page');
    const main = document.getElementById('main-page');
    const music = document.getElementById('bgMusic');

    landing.style.opacity = '0';

    setTimeout(() => {
        landing.style.display = 'none';
        main.style.display = 'block';
        main.style.opacity = '1';

        // Play music (safe autoplay)
        if (music) {
            music.volume = 0.6;
            music.play().catch(() => {
                console.log('Autoplay diblokir, musik akan diputar setelah interaksi.');
            });
        }
    }, 800);
});


// ===============================
// RSVP → WHATSAPP
// ===============================
function handleRSVP(event) {
    alert("DATA RESERVASI TELAH TERINPUT, TERIMA KASIH!");
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;

    // GANTI NOMOR INI
    const phone = "6285756749553";
    const message = `
    
\u{1F496} KONFIRMASI KENCAN \u{1F496}

Tanggal : ${date}
Waktu   : ${time}
Tempat  : ${location}

Aku sudah siap untuk kencan ini \u{2728}
    `.trim();
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.href = waUrl;
    document.getElementById('surpriseBtn').style.display = 'inline-block';
}


// ===============================
// FORMAT TANGGAL INDONESIA
// ===============================
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}


// ===============================
// SURPRISE MESSAGE
// ===============================
function showSurprise() {
    alert(
        '🎉 DETAIL ACARA 🎉\n\n' +
        '⏰ Waktu : Dari sore menuju malam\n' +
        '👗 Dresscode : Pakaian terbaikmu\n\n' +
        'Aku tunggu kehadirannya yaaaa 💖'
    );
}


// ===============================
// ANIMASI HEART (OPTIMIZED)
// ===============================
const heartContainer = document.getElementById('heart-container');

function createHeart() {
    if (!heartContainer) return;

    const maxHearts = window.innerWidth < 768 ? 10 : 15;
    if (heartContainer.children.length >= maxHearts) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 8 + 14) + 'px';
    heart.style.animationDuration = '4s';

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

// Interval adaptif (lebih smooth)
setInterval(createHeart, 1400);


// ===============================
// OPTIONAL: TOGGLE MUSIC
// ===============================
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (!music) return;

    music.paused ? music.play() : music.pause();
}
