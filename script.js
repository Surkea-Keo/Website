document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const counter = document.getElementById("loading-counter");
  const loadingScreen = document.getElementById("loading-screen");

  let currentPercentage = 0;
  let targetPercentage = 10; // Start moving immediately

  function updateProgress() {
    // Smoothly glide current percentage towards the target percentage
    currentPercentage += (targetPercentage - currentPercentage) * 0.15;
    
    const displayVal = Math.round(currentPercentage);
    progressBar.style.width = `${displayVal}%`;
    counter.textContent = `${displayVal}%`;

    // If we reach 100%, hide the loading screen
    if (displayVal >= 99) {
      progressBar.style.width = "100%";
      counter.textContent = "100%";
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
      }, 200);
      return;
    }

    requestAnimationFrame(updateProgress);
  }

  requestAnimationFrame(updateProgress);

  // Ramp up progress as page elements load
  window.addEventListener("load", () => {
    targetPercentage = 100;
  });

  // Absolute safety fallback: Force complete after 1.5 seconds no matter what
  setTimeout(() => {
    targetPercentage = 100;
  }, 1500);
});
