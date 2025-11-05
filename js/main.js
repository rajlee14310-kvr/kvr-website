// main.js - nav highlighting and chat demo
document.addEventListener('DOMContentLoaded', function () {
  // nav active highlight
  var navLinks = document.querySelectorAll('[data-nav]');
  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  navLinks.forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/+$/, '') || '/';
    if (href === path) a.classList.add('active');
  });

  // chat toggle
  var chatToggle = document.getElementById('chat-toggle');
  var chatWidget = document.getElementById('chat-widget');
  var chatClose = document.getElementById('chat-close');
  var openChat = document.getElementById('open-chat');

  function showChat() {
    if (!chatWidget) return;
    chatWidget.classList.remove('hidden');
    chatWidget.setAttribute('aria-hidden', 'false');
  }
  function hideChat() {
    if (!chatWidget) return;
    chatWidget.classList.add('hidden');
    chatWidget.setAttribute('aria-hidden', 'true');
  }

  if (chatToggle) chatToggle.addEventListener('click', showChat);
  if (openChat) openChat.addEventListener('click', showChat);
  if (chatClose) chatClose.addEventListener('click', hideChat);

  // contact form demo (client-side)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.querySelector('input[name="name"]')?.value || '';
      alert('Thanks ' + (name || '') + '! This is a demo contact form. Hook your endpoint in js/main.js.');
      contactForm.reset();
    });
  }
});