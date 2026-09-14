// ---- pre-launch access gate (shared by every page) ----
// Load in <head> with a plain <script src="gate.js"></script> (no defer/async)
// so pages are hidden before they paint. To launch: delete that tag from every
// page, delete this file, and delete the gate section at the bottom of styles.css.
//
// Soft gate only: the code is visible to anyone who reads this file.
(function(){
  const ACCESS_CODE = "ceofitness2026";
  const STORAGE_KEY = "cfla_unlocked";

  if (sessionStorage.getItem(STORAGE_KEY) === 'true') return;

  // Hides everything except #gate (styles.css) until the code is entered.
  document.documentElement.classList.add('gate-locked');

  document.addEventListener('DOMContentLoaded', function(){
    const gate = document.createElement('div');
    gate.id = 'gate';
    gate.innerHTML =
      '<div class="gate-card">' +
        '<span class="wordmark">CEO<span>&nbsp;</span>FITNESS<span> LA</span></span>' +
        '<p>This site is still under construction. Enter the access code to preview it.</p>' +
        '<form id="gate-form">' +
          '<input id="gate-input" type="text" autocomplete="off" placeholder="ACCESS CODE" aria-label="Access code">' +
          '<button type="submit" class="btn btn-primary">Enter</button>' +
          '<div id="gate-error"></div>' +
        '</form>' +
      '</div>';
    document.body.prepend(gate);

    const input = document.getElementById('gate-input');
    const errorEl = document.getElementById('gate-error');

    document.getElementById('gate-form').addEventListener('submit', function(e){
      e.preventDefault();
      if (input.value.trim().toLowerCase() === ACCESS_CODE.toLowerCase()) {
        sessionStorage.setItem(STORAGE_KEY, 'true');
        gate.remove();
        document.documentElement.classList.remove('gate-locked');
      } else {
        errorEl.textContent = "That code isn't right — try again.";
        input.value = '';
        input.focus();
      }
    });
  });
})();
