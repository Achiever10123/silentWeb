  // Mobile menu toggle
  document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });

  // Close menu when clicking on a link (for mobile)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('nav').classList.remove('active');
    });
  });

new Kursor({
  type: 2,
  color: '#ffffff',
  removeDefaultCursor: true
})
