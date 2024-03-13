const tl = gsap.timeline();

tl.from(".brand_name", {
  duration: 1,
  y: -100,
  opacity: 0,
});

tl.from(".nav_item", {
  duration: 1,
  y: -100,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".hero_title", {
  x: -500,
  duration: 1,
  opacity: 0,
  fontWeight: 200,
  stagger: 0.4,
});

tl.from(".img_holder img", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.4,
});

tl.to("#page2", {
  backgroundColor: "white",
  color: "black",
  duration: 3,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 5,
    // markers: true,
    end: "top 80%",
    start: "top 60%",
  },
});

tl.to("#page2 img", {
  duration: 3,
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "-100%",
    scrub: 2,
    pin: true,
  },
});

tl.to("#page3 h1", {
  transform: "translateX(-170%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top 80%",
    scrub: 2,
    pin: true,
  },
});
