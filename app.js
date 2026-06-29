(function () {
  if (!window.gsap) return;
  gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' });
  gsap.from('.hero-sub', { opacity: 0, y: 20, delay: 0.2 });
  gsap.from('.hero-actions .btn', { opacity: 0, y: 10, stagger: 0.1, delay: 0.4 });
})();