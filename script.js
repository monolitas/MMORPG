function sanitizeInput(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = sanitizeInput(form.elements.namedItem('name').value);
    const email = sanitizeInput(form.elements.namedItem('email').value);
    const message = sanitizeInput(form.elements.namedItem('message').value);

    console.log('Form submitted:', { name, email, message });
    alert('Thank you for signing up!');
    form.reset();
  });
});
