// src/components/Section.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section({
  id,
  title,
  subtitle,
  children,
  clipOverflow = true,
  itemsSelector,          // optional: override which items stagger in
  enableItemStagger = true, // set false if you only want the whole-section fade
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Performance hint
      gsap.set(section, { willChange: "opacity" });

      // --- WHOLE-SECTION FADE (in both directions) ---
      ScrollTrigger.matchMedia({
        // Desktop / tablets
        "(min-width: 768px)": () => {
          gsap.fromTo(
            section,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",     // when top is 80% down the viewport, begin fading in
                end:   "top 50%",     // fully visible by the time top reaches 50%
                scrub: true,          // tie opacity to scroll position
                invalidateOnRefresh: true,
                // markers: true,
              },
            }
          );
          
          // Fade out as we leave the section
          gsap.fromTo(
            section,
            { autoAlpha: 1 },
            {
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "bottom 30%",  // start fading out as bottom approaches top
                end:   "bottom top",  // fully faded when bottom reaches top of viewport
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true,
              },
            }
          );
        },

        // Phones
        "(max-width: 767px)": () => {
          gsap.fromTo(
            section,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                end:   "top 60%",     // fully visible sooner on phones
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true,
              },
            }
          );
          
          // Fade out on phones
          gsap.fromTo(
            section,
            { autoAlpha: 1 },
            {
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "bottom 35%",
                end:   "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true,
              },
            }
          );
        },
      });

      // --- INNER ITEMS STAGGER (titles, cards, grids, etc.) ---
      if (enableItemStagger) {
        const content = section.querySelector("[data-section-content]") || section;
        const selector =
          itemsSelector ||
          // Default: things commonly inside your Section
          `.js-reveal, [data-reveal],
           :scope > .mt-8 > *,
           :scope .grid > *,
           :scope .flex > *`;

        const items = Array.from(new Set(Array.from(content.querySelectorAll(selector))));
        if (items.length) {
          gsap.set(items, { autoAlpha: 0, y: 16 });

          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse", // fade back out when leaving; reverses on scroll-up
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [itemsSelector, enableItemStagger]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`pt-28 md:pt-48 pb-24 md:pb-32 ${clipOverflow ? "overflow-hidden" : "overflow-visible"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6" data-section-content>
        <h2 className="text-2xl md:text-3xl font-bold js-reveal">{title}</h2>
        {subtitle && <p className="mt-2 text-white/70 js-reveal">{subtitle}</p>}

        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
