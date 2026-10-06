/* ===================================================================
   OASIS INFOBYTE — SHARED PRESENTATION ENGINE
   Keyboard navigation · Autoplay · Progress · Slide counter
   =================================================================== */

class PresentationEngine {
  constructor(options = {}) {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.slide');
    this.totalSlides = this.slides.length;
    this.autoplayInterval = null;
    this.autoplayDelay = options.autoplayDelay || 8000;
    this.titleDuration = options.titleDuration || 3000;
    this.isAutoplay = false;

    this.init();
  }

  init() {
    // Create UI elements
    this.createProgressBar();
    this.createSlideCounter();
    this.createControls();

    // Show first slide
    this.goToSlide(0);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeydown(e));

    // Auto-start autoplay after short delay
    setTimeout(() => this.startAutoplay(), 500);
  }

  createProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(bar);
    this.progressFill = bar.querySelector('.progress-fill');
  }

  createSlideCounter() {
    const counter = document.createElement('div');
    counter.className = 'slide-counter';
    document.body.appendChild(counter);
    this.counterEl = counter;
  }

  createControls() {
    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.innerHTML = `
      <button id="btn-prev" title="Previous (←)">◀ Prev</button>
      <button id="btn-next" title="Next (→)">Next ▶</button>
      <button id="btn-autoplay" title="Toggle Autoplay">▶ Auto</button>
    `;
    document.body.appendChild(controls);

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
    document.getElementById('btn-autoplay').addEventListener('click', () => this.toggleAutoplay());
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i < index) slide.classList.add('prev');
    });

    this.slides[index].classList.add('active');
    this.currentSlide = index;

    // Update progress
    const progress = ((index + 1) / this.totalSlides) * 100;
    this.progressFill.style.width = `${progress}%`;

    // Update counter
    this.counterEl.textContent = `${index + 1} / ${this.totalSlides}`;

    // Animate chart bars if present
    this.animateChartBars(this.slides[index]);
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    } else if (this.isAutoplay) {
      this.stopAutoplay();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  startAutoplay() {
    if (this.isAutoplay) return;
    this.isAutoplay = true;

    const btn = document.getElementById('btn-autoplay');
    if (btn) {
      btn.classList.add('active');
      btn.textContent = '⏸ Pause';
    }

    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.currentSlide === 0 ? this.titleDuration : this.autoplayDelay);
  }

  stopAutoplay() {
    this.isAutoplay = false;
    clearInterval(this.autoplayInterval);

    const btn = document.getElementById('btn-autoplay');
    if (btn) {
      btn.classList.remove('active');
      btn.textContent = '▶ Auto';
    }
  }

  toggleAutoplay() {
    if (this.isAutoplay) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  handleKeydown(e) {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        this.nextSlide();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        this.prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        this.goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        this.goToSlide(this.totalSlides - 1);
        break;
      case 'p':
      case 'P':
        e.preventDefault();
        this.toggleAutoplay();
        break;
    }
  }

  animateChartBars(slide) {
    const bars = slide.querySelectorAll('.bar-fill');
    bars.forEach((bar, i) => {
      const targetWidth = bar.dataset.width || bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 200 + i * 100);
    });
  }
}

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.presentation = new PresentationEngine({
    autoplayDelay: 8000,
    titleDuration: 3000
  });
});
