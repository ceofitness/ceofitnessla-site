// ---- Formspree form submissions ----
// Any <form class="form-card" data-formspree> on a page submits in the
// background so visitors stay put. Status goes to the form's .form-status
// element. Without JS the form posts normally and Formspree shows its own
// thank-you page.
document.querySelectorAll('form[data-formspree]').forEach(function(form){
  const statusEl = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    button.disabled = true;
    statusEl.classList.remove('ok', 'err');
    statusEl.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      statusEl.classList.add('ok');
      statusEl.textContent = form.dataset.successMessage ||
        "Thanks — we got your message and will be in touch soon.";
    } catch (err) {
      statusEl.classList.add('err');
      statusEl.textContent = "Something went wrong. Please email hello@ceofitnessla.com instead.";
    } finally {
      button.disabled = false;
    }
  });
});
