// custom.js
document.addEventListener('DOMContentLoaded', function () {
    // Animasi untuk card
    const cards = document.querySelectorAll('.card');
    if (cards) {
        cards.forEach((card, index) => {
            // Delay animasi untuk setiap card
            setTimeout(() => {
                card.classList.add('visible'); // Tambahkan class 'visible' untuk memunculkan card
            }, index * 200); // Delay 200ms untuk setiap card

            // Tambahkan efek hover pada card
            card.addEventListener('mouseenter', function () {
                card.style.transform = 'scale(1.05)'; // Sedikit memperbesar card
                card.style.boxShadow = '0 8px 16px rgba(255, 193, 7, 0.5)'; // Shadow lebih tebal
                card.style.backgroundColor = '#000'; // Ubah warna latar belakang
                card.style.cursor = 'pointer'; // Ubah cursor menjadi pointer
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = 'scale(1)'; // Kembalikan ke ukuran normal
                card.style.boxShadow = 'none'; // Hilangkan shadow
                card.style.backgroundColor = ''; // Kembalikan warna latar belakang
            });

            // Tambahkan animasi saat card ditekan
            card.addEventListener('mousedown', function () {
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'transform 0.2s ease';
            });
            card.addEventListener('mouseup', function () {
                card.style.transform = 'scale(1.05)'; // Kembalikan ke ukuran hover
                card.style.transition = 'transform 0.2s ease';
            });

            // Tambahkan animasi untuk perangkat touchscreen
            card.addEventListener('touchstart', function () {
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'transform 0.2s ease';
            });
            card.addEventListener('touchend', function () {
                card.style.transform = 'scale(1.05)'; // Kembalikan ke ukuran hover
                card.style.transition = 'transform 0.2s ease';
            });
        });
    }
});