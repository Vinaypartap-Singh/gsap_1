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
