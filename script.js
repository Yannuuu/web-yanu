document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
            form.reset(); 
        } else {
            alert('Harap isi semua kolom.');
        }
    });
});