const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('.contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  status.textContent = 'Sending…';
  button.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === 'false' || result.success === false) {
      throw new Error(result.message || 'Send failed');
    }

    status.textContent = 'Thanks for reaching out. We’ll get back to you soon.';
    form.reset();
  } catch (error) {
    status.textContent = 'Something went wrong. Please email lipi@heartbrush.org instead.';
  } finally {
    button.disabled = false;
  }
});
