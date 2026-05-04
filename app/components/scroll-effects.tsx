"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    let rafActive = true;
    function raf(time: number) {
      if (!rafActive) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const sections = document.querySelectorAll<HTMLElement>("[data-parallax-section]");
    sections.forEach((section) => {
      const parallaxTarget =
        section.querySelector<HTMLElement>(".parallax-img") ??
        (section.matches(".parallax-img") ? section : null);
      if (!parallaxTarget) return;

      gsap.to(parallaxTarget, {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      rafActive = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
