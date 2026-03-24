import { motion } from "motion/react";
import { portfolioData } from "../../data/content";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  const taglineStyles = [
    "display-font text-lg md:text-xl italic font-light",
    "display-font text-4xl md:text-6xl font-bold",
    "mono-font text-xs md:text-sm uppercase tracking-widest font-light",
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-5 md:px-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1739732119808-0aeef88d14d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc0MzI4NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        {/* Name and Taglines - Full Width */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 max-w-4xl"
        >
          {/* Name */}
          <div className="mt-32 mb-8">
            

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="display-font text-muted-foreground text-right font-black text-[104px] md:text-[116px] lg:text-[128px] md:translate-x-16 lg:translate-x-24"
            >Sehyun Kim</motion.p>
          </div>

          {/* Taglines with Typing Effect */}
          <div className="space-y-6">
            {portfolioData.tagline.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.4 }}
                className="overflow-visible pb-2"
              >
                <motion.p
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{
                    width: { duration: 1.5, delay: 0.6 + index * 0.4 },
                    opacity: { duration: 0.3, delay: 0.5 + index * 0.4 },
                  }}
                  className={`${taglineStyles[index]} whitespace-nowrap inline-block text-[60px] leading-tight`}
                >
                  {line}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-border"></div>
              <span className="mono-font text-xs uppercase tracking-widest text-muted-foreground">
                Scroll to explore
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}