  const TOTAL = 7;
  let current = 1;

  function buildDots(stepEl, stepNum) {
    const container = stepEl.querySelector('#dots' + stepNum);
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= TOTAL; i++) {
      const d = document.createElement('div');
      d.className = 'dot' + (i === stepNum ? ' active' : i < stepNum ? ' done' : '');
      d.onclick = () => goTo(i);
      container.appendChild(d);
    }
  }

  function goTo(n) {
    if (n < 1 || n > TOTAL) return;
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const next = document.querySelector('[data-step="' + n + '"]');
    next.classList.add('active');
    buildDots(next, n);
    current = n;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateProgress() {
    const pct = ((current - 1) / (TOTAL - 1)) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = 'ETAPA ' + current + ' DE ' + TOTAL;
  }

  var submitted = false;
  var form = document.getElementById('kickoff-form');
  var submitBtn = document.querySelector('.btn-submit');

  async function submitForm() {

    const form = document.getElementById('kickoff-form');
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log('Resposta do servidor:', data);
    
    if (submitted) return;
    submitted = true;
    ['ferramentas_digitais', 'canais_publico', 'personalidade'].forEach(function(groupName) {
      var checked = Array.from(document.querySelectorAll('input[name="' + groupName + '"]:checked'))
                         .map(function(el) { return el.value; });
      var hidden = document.createElement('input');
      hidden.type = 'hidden';
      hidden.name = groupName;
      hidden.value = checked.join(', ');
      form.appendChild(hidden);
    });
    form.submit();
    setTimeout(function() {
      document.querySelectorAll('.step').forEach(function(s) { s.style.display = 'none'; });
      document.getElementById('successScreen').classList.add('active');
      document.getElementById('progressFill').style.width = '100%';
      document.getElementById('progressLabel').textContent = 'CONCLUÍDO ✓';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) { e.preventDefault(); submitForm(); });
    submitBtn.addEventListener('touchend', function(e) { e.preventDefault(); submitForm(); }, { passive: false });
  }

  goTo(1);