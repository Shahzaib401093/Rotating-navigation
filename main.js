var active = 3;
var mncircle = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");

gsap.to(mncircle[active - 1], {
  opacity: 0.5,
});
gsap.to(sec[active - 1], {
  opacity: 1,
});
mncircle.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to(".circle", {
      rotate: (3 - (index + 1)) * 10,
      duration: 1,
      ease: Expo.easeInOut,
    });
    greyOut();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(sec[index], {
      opacity: 1,
    });
  });
});

function greyOut() {
  gsap.to(mncircle, {
    opacity: 0.08,
  });
  gsap.to(sec, {
    opacity: 0.4,
  });
}
gsap.to(".circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 1.5,
});
