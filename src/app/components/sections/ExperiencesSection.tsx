import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { portfolioData } from "../../data/content";
import { ImageWithFallback } from "../figma/ImageWithFallback";

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

export function ExperiencesSection() {
  const { ref: sectionRef, isInView } = useInView();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeAbroadIndex, setActiveAbroadIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => setIsTouchDevice(mediaQuery.matches);

    updateTouchMode();
    mediaQuery.addEventListener("change", updateTouchMode);
    return () => mediaQuery.removeEventListener("change", updateTouchMode);
  }, []);

  // Images for Abroad experiences
  const abroadImages = [
    "/images/abroad-1.jpg",
    "/images/abroad-2.jpg",
    "/images/abroad-3.jpg",
    "/images/abroad-4.jpg",
  ];

  return (
    <section id="experiences" ref={sectionRef} className="py-24 md:py-32 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-font text-5xl md:text-7xl font-light mb-4 text-center">Experiences</h2>
          <div className="w-24 h-px bg-border mb-16 mx-auto"></div>
        </motion.div>

        {/* Abroad — full-width gallery */}
        {(() => {
          const abroadExps = portfolioData.experiences.filter((e) => e.category === "Abroad");
          return (
            <motion.div
              id="abroad"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-20"
            >
              <div className="max-w-4xl mx-auto">
              <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
                Abroad
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {abroadExps.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative aspect-[4/3] overflow-hidden border border-border hover:border-primary transition-colors"
                    onClick={() =>
                      isTouchDevice
                        ? setActiveAbroadIndex((current) => (current === index ? null : index))
                        : undefined
                    }
                  >
                    {(() => {
                      const isActive = isTouchDevice && activeAbroadIndex === index;
                      return (
                        <>
                          <ImageWithFallback
                            src={abroadImages[index]}
                            alt={exp.title}
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              isActive ? "scale-105 opacity-30" : "group-hover:scale-105 group-hover:opacity-30"
                            }`}
                          />
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <div className="text-center px-6">
                              <p className="mono-font text-2xl md:text-3xl uppercase tracking-widest text-black mb-3">
                                {exp.period}
                              </p>
                              {exp.description && (
                                <p className="text-lg md:text-xl text-black font-normal">
                                  {exp.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div
                            className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                              isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                            }`}
                          >
                            <h4 className="font-light leading-tight text-white font-bold text-sm sm:text-base md:text-lg break-words [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
                              {exp.title}
                            </h4>
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          );
        })()}

        {/* Inner School & Outer School — 2-column side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {[
            { id: "inner-school", label: "Inner School", key: "InnerSchool" as const },
            { id: "outer-school", label: "Outer School", key: "OuterSchool" as const },
          ].map((category, categoryIndex) => {
            const experiences = portfolioData.experiences.filter(
              (exp) => exp.category === category.key
            );
            return (
              <div key={category.id} id={category.id}>
                <h3 className="display-font font-light uppercase text-base tracking-wider mb-6 text-muted-foreground">
                  {category.label}
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + index * 0.04 }}
                      className="border-l-2 border-border pl-4 py-1.5 hover:border-primary transition-colors"
                    >
                      <span className="mono-font text-xs text-muted-foreground block mb-0.5">
                        {exp.period}
                      </span>
                      <span className="text-sm leading-snug">{exp.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}