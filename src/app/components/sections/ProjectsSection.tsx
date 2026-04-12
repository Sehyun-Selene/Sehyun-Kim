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

function projectTitlePlain(title: string) {
  return title.replace(/\n/g, " ").trim();
}

function ProjectHeading({ title }: { title: string }) {
  const lines = title.split("\n");
  if (lines.length === 1) {
    return (
      <h3 className="text-lg md:text-xl display-font leading-tight break-words [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
        {title}
      </h3>
    );
  }
  const [first, ...rest] = lines;
  const second = rest.join("\n");
  return (
    <h3 className="display-font leading-tight">
      <span className="block text-lg md:text-xl">{first}</span>
      <span className="mt-1 block text-[clamp(0.6875rem,2.2vw,0.8125rem)] sm:text-xs md:text-sm lg:text-[0.9375rem] leading-snug tracking-tight md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
        {second}
      </span>
    </h3>
  );
}

export function ProjectsSection() {
  const { ref: sectionRef, isInView } = useInView();
  const projects = portfolioData.projects;
  const totalSlots = Math.max(3, Math.ceil(projects.length / 3) * 3);
  const projectSlots = Array.from({ length: totalSlots }, (_, index) => projects[index] ?? null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-10 md:pb-14 px-5 md:px-20 bg-secondary"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-font text-5xl md:text-7xl font-light mb-4">Projects</h2>
          <div className="w-24 h-px bg-border mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectSlots.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              {/* Project Poster - Poster Ratio */}
              <div className="relative mb-4 aspect-[3/4] bg-muted border-2 border-border overflow-hidden">
                {project?.imageUrl ? (
                  project.linkUrl ? (
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`${projectTitlePlain(project.title)} — 열기 (새 탭)`}
                    >
                      <ImageWithFallback
                        src={project.imageUrl}
                        alt={`${projectTitlePlain(project.title)} poster`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ) : (
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={`${projectTitlePlain(project.title)} poster`}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="mono-font text-sm text-muted-foreground uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-3">
                  {project ? (
                    <ProjectHeading title={project.title} />
                  ) : (
                    <h3 className="text-lg md:text-xl display-font leading-tight break-words [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                      Coming Soon
                    </h3>
                  )}
                </div>
                <p className="mono-font text-xs uppercase tracking-widest text-muted-foreground">
                  {project ? project.type : "Future Project"}
                </p>
                {project?.description && (
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">{project.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}