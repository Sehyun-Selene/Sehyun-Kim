import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { portfolioData } from "../../data/content";

function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

export function AboutSection() {
  const { ref: sectionRef, isInView } = useInView();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeInterestIndex, setActiveInterestIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => setIsTouchDevice(mediaQuery.matches);

    updateTouchMode();
    mediaQuery.addEventListener("change", updateTouchMode);
    return () => mediaQuery.removeEventListener("change", updateTouchMode);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-font text-5xl md:text-7xl font-light mb-4 text-center">About</h2>
          <div className="w-24 h-px bg-border mb-16 mx-auto"></div>
        </motion.div>

        {/* Academic Background · Interests · Values — 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">

          {/* Academic Background */}
          <motion.div
            id="academic"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
              Academic Background
            </h3>
            <div className="space-y-8">
              {portfolioData.academics.map((academic, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <p className="text-base md:text-lg mb-2">{academic.institution}</p>
                  {academic.major && (
                    <p className="text-muted-foreground mb-2">{academic.major}</p>
                  )}
                  <p className="text-sm text-muted-foreground font-sans">{academic.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            id="interests"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
              Interests
            </h3>
            <div className="space-y-3">
              {portfolioData.interests.map((interest, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    isTouchDevice
                      ? setActiveInterestIndex((current) => (current === index ? null : index))
                      : undefined
                  }
                  className={`w-full text-center border border-border px-4 py-3 transition-colors ${
                    isTouchDevice && activeInterestIndex === index ? "bg-accent" : "hover:bg-accent"
                  }`}
                >
                  <p className="text-sm">{interest}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            id="values"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
              Values
            </h3>
            <div className="space-y-3">
              {portfolioData.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-center text-center"
                >
                  <span className="mono-font uppercase text-sm tracking-wider">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}