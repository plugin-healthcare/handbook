// Logo Showcase - Infinite Scrolling Carousel
// Based on https://github.com/livebloggerofficial/Logos-Showcase

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.marquee-track');

  // Only initialize if the marquee track exists on the page
  if (!track) return;

  const logoSlide = document.querySelector('.logo-slide');

  // Clone the logo slide 4 times to create seamless loop
  for (let i = 0; i < 4; i++) {
    track.appendChild(logoSlide.cloneNode(true));
  }

  let scrollPosition = 0;
  let isPlaying = true;
  const speed = 1; // pixels per frame

  function scroll() {
    if (isPlaying) {
      scrollPosition -= speed;

      // Reset position when one slide width has been scrolled
      if (Math.abs(scrollPosition) >= logoSlide.offsetWidth) {
        scrollPosition = 0;
      }

      track.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    }
  }

  // Start the animation
  scroll();

  // Pause on hover
  track.addEventListener('mouseenter', () => {
    isPlaying = false;
  });

  // Resume on mouse leave
  track.addEventListener('mouseleave', () => {
    isPlaying = true;
    scroll();
  });
});
