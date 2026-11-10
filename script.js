document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            // Check if current item is already active
            const isActive = item.classList.contains('active');

            // Close all open FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});

// Simulates / tracks progress percentage smooth transition
let progress = 0;
const progressBar = document.getElementById('progress-bar');
const counter = document.getElementById('loading-counter');

const interval = setInterval(() => {
  progress += Math.floor(Math.random() * 15) + 5;
  if (progress >= 100) {
    progress = 100;
    clearInterval(interval);
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
    }, 300);
  }
  progressBar.style.width = `${progress}%`;
  counter.textContent = `${progress}%`;
}, 100);