import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Instagram, Mail } from "lucide-react";
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

export function Footer() {
  const { ref: sectionRef, isInView } = useInView();
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    portfolioData.contact.email
  )}`;
  const phoneTelHref = `tel:${portfolioData.contact.phone.replace(/\D/g, "")}`;

  return (
    <footer id="contact" ref={sectionRef} className="py-24 md:py-32 px-5 md:px-20 border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <div>
            <h2 className="display-font text-5xl md:text-7xl font-light mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href={portfolioData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <Instagram size={20} />
              <span className="mono-font uppercase text-sm tracking-wider">Instagram</span>
            </a>
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <Mail size={20} />
              <span className="mono-font uppercase text-sm tracking-wider">Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 space-y-2"
          >
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mono-font text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {portfolioData.contact.email}
            </a>
            <a
              href={phoneTelHref}
              className="block mono-font text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {portfolioData.contact.phone}
            </a>
            <div className="w-24 h-px bg-border mx-auto my-6"></div>
            <p className="display-font text-2xl">{portfolioData.name}</p>
            <p className="mono-font text-xs uppercase tracking-widest text-muted-foreground">
              © 2026 All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
