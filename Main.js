// ── SCROLL REVEAL ──
(function () {
const els = document.querySelectorAll(’.reveal’);
const io = new IntersectionObserver((entries) => {
entries.forEach((e, i) => {
if (e.isIntersecting) {
setTimeout(() => e.target.classList.add(‘visible’), i * 70);
io.unobserve(e.target);
}
});
}, { threshold: 0.08 });
els.forEach(el => io.observe(el));
})();

// ── ACTIVE NAV ──
(function () {
const path = window.location.pathname.split(’/’).pop() || ‘index.html’;
document.querySelectorAll(’.nav-links a’).forEach(a => {
if (a.getAttribute(‘href’) === path) a.classList.add(‘active’);
});
})();
