"use client";
import { HeaderNav } from "@/app/components/header-nav";
import { MainVisual } from "@/app/components/main-visual";
import { ConceptSection } from "@/app/components/concept-section";
import { MenuSection } from "@/app/components/menu-section";
import { StylistSection } from "@/app/components/stylist-section";
import { AccessSection } from "@/app/components/access-section";
import { ReserveSection } from "@/app/components/reserve-section";
import { SiteFooter } from "@/app/components/site-footer";
import { WaterBackground } from "@/app/components/water-background";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const parallaxRefConceptSection = useRef<HTMLDivElement>(null);
  const parallaxRefMenuSection = useRef<HTMLDivElement>(null);
  const parallaxRefStylistSection = useRef<HTMLDivElement>(null);
  const parallaxRefAccessSection = useRef<HTMLDivElement>(null);
  const parallaxRefReserveSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (parallaxRefConceptSection.current) {
      gsap.to(parallaxRefConceptSection.current.querySelector(".parallax-img"), {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRefConceptSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (parallaxRefMenuSection.current) {
      gsap.to(parallaxRefMenuSection.current.querySelector(".parallax-img"), {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRefMenuSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (parallaxRefStylistSection.current) {
      gsap.to(parallaxRefStylistSection.current.querySelector(".parallax-img"), {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRefStylistSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (parallaxRefAccessSection.current) {
      gsap.to(parallaxRefAccessSection.current.querySelector(".parallax-img"), {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRefAccessSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (parallaxRefReserveSection.current) {
      gsap.to(parallaxRefReserveSection.current.querySelector(".parallax-img"), {
        y: 480,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRefReserveSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <WaterBackground />
      <div className="relative z-10">
        <HeaderNav />
        <MainVisual />
        <ConceptSection sectionRef={parallaxRefConceptSection} />
        <MenuSection sectionRef={parallaxRefMenuSection} />
        <StylistSection sectionRef={parallaxRefStylistSection} />
        <AccessSection sectionRef={parallaxRefAccessSection} />
        <ReserveSection sectionRef={parallaxRefReserveSection} />
        <SiteFooter />
      </div>
    </>
  );
}
