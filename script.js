// Fungsi untuk menangani pengiriman formulir
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah formulir terkirim dengan cara tradisional

        // Mengambil nilai dari formulir
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        // Menampilkan alert dengan data formulir
        if (name && email && message) {
            alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
            form.reset(); // Menghapus isi formulir setelah pengiriman
        } else {
            alert('Harap isi semua kolom.');
        }
    });
});