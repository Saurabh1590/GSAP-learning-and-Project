window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to(".morque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat:-1,
      ease: "none",
    });

    gsap.to(".morque img",{
        rotate:180,
    })
  } else {
    gsap.to(".morque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat:-1,
      ease: "none",
    });
    gsap.to(".morque img",{
        rotate:0,
    })
  }
});
