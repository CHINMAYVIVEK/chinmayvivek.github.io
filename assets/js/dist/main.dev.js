"use strict";

// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('section');
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });
});