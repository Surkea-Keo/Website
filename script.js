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
