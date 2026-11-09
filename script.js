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

// Function to hide the loading screen safely
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
    loadingScreen.classList.add('hidden');
  }
}

// 1. Try hiding when DOM is ready (faster than full window load)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hideLoadingScreen, 500);
});

// 2. Fallback: Force hide after 1.5 seconds guaranteed (prevents Facebook in-app browser lockups)
window.addEventListener('load', () => {
  setTimeout(hideLoadingScreen, 300);
});

// Ultimate safety net: Absolute maximum timeout
setTimeout(hideLoadingScreen, 1500);
