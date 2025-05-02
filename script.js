// Cegah scroll otomatis ke hash saat pertama load
if (window.location.hash) {
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, ' ');
}
document.addEventListener('DOMContentLoaded', function() {
    // Tab Menu Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 1. Hapus class active dari semua button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // 2. Tambahkan class active ke button yang diklik
            this.classList.add('active');
            
            // 3. Sembunyikan semua tab pane
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // 4. Tampilkan tab pane yang sesuai
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // 5. Animasi fade in
            document.getElementById(tabId).style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                } else {
                    opacity += 0.05;
                    document.getElementById(tabId).style.opacity = opacity;
                }
            }, 20);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submissions
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Reservasi Anda telah berhasil dikirim. Kami akan menghubungi Anda untuk konfirmasi.');
            this.reset();
        });
    }

    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan Anda telah berhasil dikirim. Terima kasih telah menghubungi kami!');
            this.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih telah berlangganan newsletter kami!');
            this.reset();
        });
    }

    // Set minimum date for reservation to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute('min', today);
    }
});
