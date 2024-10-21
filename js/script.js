//----------------- CONTACT BUTTON ------------------

const contactButton = document.querySelector(".contact-button");

// Email to be displayed and copied
const email = "reckhardtx@gmail.com";
let isCopying = false; // Flag to prevent premature text reset

// Handle hover to change text to email
contactButton.addEventListener("mouseenter", () => {
  if (!isCopying) {
    // Only change text if not in the middle of copying
    contactButton.textContent = email;
  }
});

// Handle mouse leave to change text back to default if not clicked
contactButton.addEventListener("mouseleave", () => {
  if (!isCopying) {
    // Only reset if not in copying state
    contactButton.textContent = "Contact";
  }
});

// Handle click to copy email and change text
contactButton.addEventListener("click", () => {
  navigator.clipboard.writeText(email).then(() => {
    isCopying = true; // Set flag to true when copying starts
    contactButton.innerHTML =
      'Copied to clipboard <span class="checkmark">&#10003;</span>';

    // Keep the "Copied to clipboard" message for 3 seconds
    setTimeout(() => {
      contactButton.textContent = "Contact";
      isCopying = false; // Reset flag after 3 seconds
    }, 3000);
  });
});

const mobileContactInfo = document.querySelector(".mobile-contact-info");

mobileContactInfo.addEventListener("click", () => {
  navigator.clipboard.writeText(email).then(() => {
    isCopying = true; // Set flag to true when copying starts
    mobileContactInfo.innerHTML =
      'Copied to clipboard <span class="checkmark">&#10003;</span>';

    // Keep the "Copied to clipboard" message for 3 seconds
    setTimeout(() => {
      mobileContactInfo.textContent = "RECKHARDTX@GMAIL.COM";
      isCopying = false; // Reset flag after 3 seconds
    }, 3000);
  });
});

//----------------- MOBILE MENU ------------------

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
  // Toggle the button text between "Menu" and "Close"
  if (this.textContent === "Menu") {
    this.textContent = "Close";
  } else {
    this.textContent = "Menu";
  }

  // Toggle the "active" class on the nav-links to slide the menu down
  navLinks.classList.toggle("active");
});
