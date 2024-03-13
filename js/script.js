const allH1 = document.querySelectorAll("#page4 h1");
allH1.forEach((elem) => {
  var clutter = "";
  const text = elem.textContent;
  const spilltedText = text.split("");
  spilltedText.forEach((letter) => {
    clutter += `<span>${letter}</span>`;
  });

  elem.innerHTML = clutter;
});

const gsapText = document.getElementById("gsapText");
const splitText = gsapText.textContent.split("");
var gsapClutter = "";
splitText.forEach((letter) => {
  gsapClutter += `<span>${letter}</span>`;
});
gsapText.innerHTML = gsapClutter;

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
  y: 150,
  opacity: 0,
  stagger: 0.4,
});

tl.to("#gsapText span", {
  color: "#e4e4e4",
  textTransform: "uppercase",
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

tl.to(".page2_img", {
  duration: 3,
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "-140%",
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

tl.to("#page4 h1 span", {
  color: "white",
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 0%",
    end: "top -10%",
    scrub: 3,
    pin: true,
    markers: true,
  },
});
