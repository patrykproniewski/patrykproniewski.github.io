gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  gsap.from(".brand", {
    y: -18,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out"
  });

  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.15,
    ease: "power4.out"
  });

  gsap.from(".hero-claim > *", {
    y: 26,
    opacity: 0,
    stagger: 0.09,
    duration: 0.85,
    delay: 0.15,
    ease: "power3.out"
  });

  gsap.to(".wave-1", {
    y: -90,
    x: 90,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".wave-2", {
    y: -120,
    x: -70,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".wave-3", {
    y: -80,
    x: 110,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".about-photo", {
    filter: "grayscale(0)",
    scale: 1,
    y: -22,
    scrollTrigger: {
      trigger: ".about",
      start: "top 76%",
      end: "center center",
      scrub: true
    }
  });

  gsap.from(".about-copy > *", {
    y: 44,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top 74%"
    }
  });

  gsap.from(".story-copy > *", {
    y: 38,
    opacity: 0,
    stagger: 0.1,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".story-copy",
      start: "top 75%"
    }
  });

  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".story",
      start: "top top",
      end: "+=1700",
      scrub: true,
      pin: true
    }
  });

  storyTl
    .to(".hands-before", {
      x: 70,
      scale: 1.04,
      duration: 1
    })
    .to(".word-1", {
      opacity: 1,
      y: -20,
      duration: 0.25
    }, 0.12)
    .to(".word-1", {
      opacity: 0,
      y: -70,
      duration: 0.25
    }, 0.36)
    .to(".word-2", {
      opacity: 1,
      y: -20,
      duration: 0.25
    }, 0.42)
    .to(".word-2", {
      opacity: 0,
      y: -70,
      duration: 0.25
    }, 0.66)
    .to(".word-3", {
      opacity: 1,
      y: -20,
      duration: 0.25
    }, 0.72)
    .to(".word-3", {
      opacity: 0,
      y: -70,
      duration: 0.25
    }, 0.96)
    .to(".word-4", {
      opacity: 1,
      y: -20,
      duration: 0.25
    }, 1.02)
    .to(".word-4", {
      opacity: 0,
      y: -70,
      duration: 0.25
    }, 1.28)
    .to(".hands-before", {
      opacity: 0,
      scale: 1.12,
      duration: 0.35
    }, 1.28)
    .to(".hands-final", {
      opacity: 1,
      scale: 1,
      duration: 0.45
    }, 1.34);

  gsap.utils.toArray(".job").forEach((job) => {
    gsap.from(job, {
      y: 60,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: job,
        start: "top 84%"
      }
    });

    gsap.to(job, {
      "--progress": "100%",
      scrollTrigger: {
        trigger: job,
        start: "top 85%",
        end: "bottom 55%",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".skill i").forEach((line, i) => {
    gsap.to(line, {
      scaleX: 1,
      duration: 1.15,
      delay: i * 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line,
        start: "top 86%"
      }
    });
  });

  gsap.fromTo(
    ".marker-hand",
    {
      x: 90,
      y: 35,
      opacity: 0,
      rotate: 3
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 68%"
      }
    }
  );

  gsap.from(".edu-grid article", {
    y: 55,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".education",
      start: "top 75%"
    }
  });

  gsap.from(".contact-handshake", {
    y: 45,
    opacity: 0,
    scale: 0.96,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 75%"
    }
  });
}

document.querySelectorAll(".action-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (event) => {
    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.08,
      y: y * 0.16,
      duration: 0.3,
      ease: "power3.out"
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, .45)"
    });
  });
});

const themeToggle = document.querySelector(".theme-toggle");
const themeWipe = document.querySelector(".theme-wipe");

const storedTheme = localStorage.getItem("proniewski-theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark");
  const icon = themeToggle?.querySelector("span");
  if (icon) icon.textContent = "☀";
}

themeToggle?.addEventListener("click", () => {
  const nextDark = !document.body.classList.contains("dark");
  const color = nextDark ? "#0d1116" : "#f7f1e8";

  gsap.set(themeWipe, {
    background: color,
    opacity: 1,
    scale: 0,
    borderRadius: "48% 52% 44% 56%"
  });

  gsap.timeline({
    defaults: {
      ease: "power4.inOut"
    }
  })
    .to(themeWipe, {
      scale: 5.5,
      duration: 0.58
    })
    .add(() => {
      document.body.classList.toggle("dark", nextDark);
      localStorage.setItem("proniewski-theme", nextDark ? "dark" : "light");

      const icon = themeToggle.querySelector("span");
      if (icon) icon.textContent = nextDark ? "☀" : "☾";
    }, "-=0.12")
    .to(themeWipe, {
      opacity: 0,
      duration: 0.34
    });
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
