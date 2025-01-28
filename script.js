// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Fantasy MMORPG website loaded!');

  // Form submission handling
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Sanitize inputs
    const name = sanitizeInput(form.name.value);
    const email = sanitizeInput(form.email.value);
    const message = sanitizeInput(form.message.value);

    console.log('Form submitted:', { name, email, message });
    alert('Thank you for signing up!');
    form.reset();
  });
});

// Sanitize user inputs to prevent XSS
function sanitizeInput(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
