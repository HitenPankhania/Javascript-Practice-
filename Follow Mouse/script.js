
window.addEventListener("mousemove", function (details) {
    var rectangle = this.document.querySelector('#rectangle');
    var xval = gsap.utils.mapRange(
      0,
      window.innerWidth,
      100 + rectangle.getBoundingClientRect().width / 2,
      window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
      details.clientX
    );
  
    gsap.to('#rectangle', {
      left: xval,
      ease: Power3
    });
  });
