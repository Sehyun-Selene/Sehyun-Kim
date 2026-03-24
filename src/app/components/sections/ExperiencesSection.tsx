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

  const categories = [
    { id: "abroad", label: "Abroad", key: "Abroad" as const },
    { id: "inner-school", label: "Inner School", key: "InnerSchool" as const },
    { id: "outer-school", label: "Outer School", key: "OuterSchool" as const },
  ];

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
          <h2 className="display-font text-5xl md:text-7xl font-light mb-4">Experiences</h2>
          <div className="w-24 h-px bg-border mb-16"></div>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const experiences = portfolioData.experiences.filter(
            (exp) => exp.category === category.key
          );

          // Special gallery layout for Abroad
          if (category.key === "Abroad") {
            return (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="mb-20 last:mb-0"
              >
                <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences.map((exp, index) => (
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
                      {/*
                        On touch devices, tap toggles the overlay state.
                        On pointer devices, keep hover behavior.
                      */}
                      {(() => {
                        const isActive = isTouchDevice && activeAbroadIndex === index;
                        return (
                          <>
                      {/* Image */}
                      <ImageWithFallback
                        src={abroadImages[index]}
                        alt={exp.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isActive ? "scale-105 opacity-30" : "group-hover:scale-105 group-hover:opacity-30"
                        }`}
                      />
                      
                      {/* Overlay - shows on hover */}
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

                      {/* Title - shows by default, hides on hover */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                          isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                        }`}
                      >
                        <h4 className="font-light leading-tight text-white font-bold text-lg sm:text-xl md:text-[40px] break-words [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                          {exp.title}
                        </h4>
                      </div>
                          </>
                        );
                      })()}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          }

          // Default timeline layout for other categories
          return (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="mb-20 last:mb-0"
            >
              <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
                {category.label}
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="border-l-2 border-border pl-6 py-2 hover:border-primary transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
                      <span className="mono-font text-sm text-muted-foreground min-w-[120px]">
                        {exp.period}
                      </span>
                      <span className="text-lg md:text-xl">{exp.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}