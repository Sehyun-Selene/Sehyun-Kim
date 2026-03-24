import { GNB } from "./components/layout/GNB";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperiencesSection } from "./components/sections/ExperiencesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <GNB />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
