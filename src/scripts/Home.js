const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // chỉ animate 1 lần
      }
    });
  },
  {
    threshold: 0.1,
  }
);

reveals.forEach((el) => {
  revealObserver.observe(el);
});
