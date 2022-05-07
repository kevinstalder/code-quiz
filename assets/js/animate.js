  const animate = document.querySelectorAll('.animate-me');
  let inAdvance = -(window.innerHeight * 0.15);

  const animate_on_scroll = function () {
    // var inAdvance = -10;
    animate.forEach(function (el) {
      if (el.offsetParent == null) {
        return;
      }
      if (el.classList.contains('animated')) {
        return;
      }
      let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        inAdvance = -(window.innerHeight * 0.15);
      if (undefined != el.dataset.offset) {
        inAdvance = (window.innerHeight * parseFloat(el.dataset.offset));
      }
      if (
        rect.top + scrollTop <
        window.innerHeight + window.pageYOffset + inAdvance
      ) {
        el.classList.add('animated');
        el.classList.add(el.dataset.animate);
      }
    });
  };

  // if($('.animate-me').length < 1) return;
  document.addEventListener("DOMContentLoaded" ,animate_on_scroll);
  window.addEventListener("load",animate_on_scroll);
  window.addEventListener('scroll', animate_on_scroll);