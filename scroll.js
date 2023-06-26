gsap.to(".scroll", { 
  rotation: 3,
  duration: 0.2,
  scrollTrigger: {
    start: "0 40%",
    trigger: ".scroll",
    markers: false,
  },
});
