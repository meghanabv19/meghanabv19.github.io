/* Meghana BV — portfolio interactions */
(function () {
  'use strict';

  // "Send me a role" form -> pre-addressed mailto with a structured brief
  var form = document.getElementById('roleForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var v = function (n) { return (f[n] && f[n].value || '').trim(); };
      var subject = 'Role: ' + (v('role') || 'Data Engineer') + ' at ' + (v('company') || '');
      var body =
        'Hi Meghana,\n\n' +
        'We have a role that may suit you.\n\n' +
        'Company:   ' + v('company') + '\n' +
        'Role:      ' + v('role') + '\n' +
        'Location:  ' + v('location') + '\n' +
        'Type:      ' + v('type') + '\n' +
        'Rate/sal:  ' + v('rate') + '\n\n' +
        'Notes:\n' + v('notes') + '\n\n' +
        '—\n' + v('name') + '\n' + v('reply');
      window.location.href = 'mailto:meghanabv11@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
    });
  }

  // Active-section highlight in the nav
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) map[id] = a;
  });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });
  if ('IntersectionObserver' in window && sections.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.style.color = ''; });
          var active = map[en.target.id];
          if (active) active.style.color = 'var(--accent)';
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
