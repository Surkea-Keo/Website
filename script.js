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

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const counter = document.getElementById("loading-counter");
  const loadingScreen = document.getElementById("loading-screen");

  // Gather all images and stylesheets on the page
  const assets = document.querySelectorAll("img, link[rel='stylesheet'], script");
  let totalAssets = assets.length;
  let loadedCount = 0;
  let currentPercentage = 0;
  let targetPercentage = 0;

  // If the page has zero trackable assets, simulate a smooth quick load
  if (totalAssets === 0) {
    totalAssets = 1;
    loadedCount = 1;
  }

  // Function to update the visual width and text
  function updateProgress() {
    // Smoothly glide current percentage towards the target percentage
    currentPercentage += (targetPercentage - currentPercentage) * 0.1;
    
    const displayVal = Math.round(currentPercentage);
    progressBar.style.width = `${displayVal}%`;
    counter.textContent = `${displayVal}%`;

    // If we reach 100%, hide the loading screen
    if (displayVal >= 99) {
      progressBar.style.width = "100%";
      counter.textContent = "100%";
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
      }, 300);
      return;
    }

    requestAnimationFrame(updateProgress);
  }

  requestAnimationFrame(updateProgress);

  // Track each asset as it loads
  function assetLoaded() {
    loadedCount++;
    targetPercentage = Math.floor((loadedCount / totalAssets) * 100);
  }

  assets.forEach(asset => {
    if (asset.tagName === "IMG") {
      if (asset.complete) {
        assetLoaded();
      } else {
        asset.addEventListener("load", assetLoaded);
        asset.addEventListener("error", assetLoaded); // Count errors too so it doesn't freeze
      }
    } else {
      assetLoaded();
    }
  });

  // Fallback: Force finish after 2 seconds no matter what (prevents permanent hanging)
  setTimeout(() => {
    targetPercentage = 100;
  }, 2000);
});
