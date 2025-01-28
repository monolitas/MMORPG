function sanitizeInput(input: string): string {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form') as HTMLFormElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const name = sanitizeInput((form.elements.namedItem('name') as HTMLInputElement).value);
    const email = sanitizeInput((form.elements.namedItem('email') as HTMLInputElement).value);
    const message = sanitizeInput((form.elements.namedItem('message') as HTMLTextAreaElement).value);

    console.log('Form submitted:', { name, email, message });
    alert('Thank you for signing up!');
    form.reset();
  });
});
