/*----
PROJECT 4
NAME: HARAMNPREET KAUR
PROJECT 4
DATE: 21-04-2026
Description: PORTFOLIO WEBSITE
-----*/

// Run this code after the page fully loads
document.addEventListener("DOMContentLoaded", function () {

  // Get the form
  const form = document.getElementById("contactForm");

  // If form is not found, do nothing
  if (!form) return;

  // When the form is submitted
  form.addEventListener("submit", function (event) {

    let valid = true; // assume everything is fine first

    // Get input values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Patterns for checking phone and email
    const phoneRegex = /^\d{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if name is empty
    if (name === "") {
      alert("Please enter your name");
      valid = false;
    }

    // Check phone number (must be 10 digits)
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be 10 digits");
      valid = false;
    }

    // Check email format
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      valid = false;
    }

    // Stop form if something is wrong
    if (!valid) {
      event.preventDefault();
    }
  });

});