document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
      console.log("Gone To Next Slide")
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
      console.log("Gone To Previous Slide")
    }
  });
});
