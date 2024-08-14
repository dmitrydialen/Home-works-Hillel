document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const dotsContainer = document.querySelector('.dots-container');
  
    function initSlider() {
      slides[currentSlide].classList.add('show');
      updateButtons();
      createDots();
      updateDots();
    }
  
    function updateButtons() {
      prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
      nextButton.style.display = currentSlide === totalSlides - 1 ? 'none' : 'block';
    }
  
    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        slides[currentSlide].classList.remove('show');
        currentSlide++;
        slides[currentSlide].classList.add('show');
        updateButtons();
        updateDots();
      }
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        slides[currentSlide].classList.remove('show');
        currentSlide--;
        slides[currentSlide].classList.add('show');
        updateButtons();
        updateDots();
      }
    }
  
    function createDots() {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', function () {
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
      }
    }
  
    function goToSlide(slideIndex) {
      slides[currentSlide].classList.remove('show');
      currentSlide = slideIndex;
      slides[currentSlide].classList.add('show');
      updateButtons();
      updateDots();
    }
  
    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentSlide].classList.add('active');
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    initSlider();
  });
  