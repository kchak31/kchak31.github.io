const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const filters = document.querySelectorAll('.filter');
const entries = document.querySelectorAll('.publication-entry');
if (filters.length) {
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.filter;
    entries.forEach(entry => {
      const topics = (entry.dataset.topics || '').split(' ');
      entry.classList.toggle('hidden', key !== 'all' && !topics.includes(key));
    });
  }));
}
