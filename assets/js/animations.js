// Main GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in on scroll
gsap.utils.toArray('.reveal-up').forEach((elem) => {
  gsap.fromTo(elem, {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
});

// Horizontal fade-in
gsap.utils.toArray('.reveal-left').forEach((elem) => {
    gsap.fromTo(elem, {
        opacity: 0,
        x: -100,
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
        },
    });
});

gsap.utils.toArray('.reveal-right').forEach((elem) => {
    gsap.fromTo(elem, {
        opacity: 0,
        x: 100,
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
        },
    });
});

// Image Reveal (Industrial style)
gsap.utils.toArray('.img-reveal').forEach((elem) => {
    gsap.fromTo(elem, {
        opacity: 0,
        clipPath: 'inset(100% 0% 0% 0%)',
    }, {
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
        },
    });
});
