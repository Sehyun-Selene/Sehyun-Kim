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

export function SkillsSection() {
  const { ref: sectionRef, isInView } = useInView();
  const [activeToolIndex, setActiveToolIndex] = useState<number | null>(null);

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Native":
        return "100%";
      case "Fluent":
        return "90%";
      case "Intermediate":
        return "70%";
      case "Beginner":
        return "40%";
      default:
        return "0%";
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 px-5 md:px-20 bg-secondary">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-font text-5xl md:text-7xl font-light mb-4">Skills</h2>
          <div className="w-24 h-px bg-border mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Languages */}
          <motion.div
            id="languages"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
              Languages
            </h3>
            <div className="space-y-6">
              {portfolioData.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg">{lang.language}</span>
                    <span className="mono-font text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-1 bg-border w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: getLevelWidth(lang.level) } : {}}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            id="tools"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="display-font font-light uppercase text-base tracking-wider mb-8 text-muted-foreground">
              Tools <span className="text-xs">(Learning)</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.tools.map((tool, index) => (
                <motion.button
                  key={index}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveToolIndex((current) => (current === index ? null : index))}
                  className={`border border-border bg-background p-6 text-center transition-colors ${
                    activeToolIndex === index
                      ? "border-primary bg-[rgb(246,193,230)]"
                      : "hover:border-primary hover:bg-[rgb(246,193,230)]"
                  }`}
                >
                  <p className="text-lg">{tool}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}