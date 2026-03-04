document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer untuk animasi scroll pada section
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Jika itu adalah section skills, jalankan animasi bar
                if (entry.target.id === 'skills') {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300); // Sedikit delay agar terlihat lebih natural setelah section muncul
                    });
                }
            }
        });
    }, observerOptions);

    // Observe semua section
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Tampilkan section pertama dengan delay kecil meski tidak scroll
    setTimeout(() => {
        const firstSection = document.querySelector('.section');
        if (firstSection && !firstSection.classList.contains('visible')) {
            firstSection.classList.add('visible');
        }
    }, 100);
});
