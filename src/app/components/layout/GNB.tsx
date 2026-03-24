import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    subItems: [
      { label: "Academic Background", href: "#academic" },
      { label: "Interests", href: "#interests" },
      { label: "Values", href: "#values" },
    ],
  },
  {
    label: "Skills",
    href: "#skills",
    subItems: [
      { label: "Languages", href: "#languages" },
      { label: "Tools", href: "#tools" },
    ],
  },
  {
    label: "Experiences",
    href: "#experiences",
    subItems: [
      { label: "Abroad", href: "#abroad" },
      { label: "Inner School", href: "#inner-school" },
      { label: "Outer School", href: "#outer-school" },
    ],
  },
  { label: "Projects", href: "#projects" },
];

export function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const topLevelSections = new Set(["#about", "#skills", "#experiences", "#projects"]);
      const mainTitle = topLevelSections.has(href) ? element.querySelector("h2") : null;
      const targetElement = mainTitle ?? element;
      const visualGap = 20;
      const targetY =
        window.scrollY + targetElement.getBoundingClientRect().top - navHeight - visualGap;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled ? "bg-background border-b border-border" : "bg-background"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Profile Photo */}
            <div className="flex items-center gap-3">
              {/* Profile Photo - ID Photo aspect ratio (3:4) */}
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="w-10 h-[52px] overflow-hidden border border-border hover:border-primary transition-colors"
                aria-label="Open profile image"
              >
                <ImageWithFallback
                  src="/images/profile.jpg"
                  alt="Sehyun Kim"
                  className="w-full h-full object-cover"
                />
              </button>
              {/* Logo Text */}
              <button
                onClick={() => handleNavClick("#hero")}
                className="display-font text-2xl md:text-3xl tracking-tight hover:opacity-70 transition-opacity"
              >
                Selene
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group pb-4 -mb-4"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="mono-font uppercase text-sm tracking-wider hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </button>
                  {item.subItems && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-background border border-border min-w-[200px] shadow-lg">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavClick(subItem.href)}
                          className="block w-full text-left px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button and Name */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-primary text-primary-foreground px-6 py-3 mono-font uppercase text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden" style={{ top: "80px" }}>
          <div className="px-5 py-8 space-y-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="mono-font uppercase text-lg tracking-wider w-full text-left"
                >
                  {item.label}
                </button>
                {item.subItems && (
                  <div className="mt-3 ml-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-primary text-primary-foreground px-6 py-3 mono-font uppercase text-sm tracking-wider w-full"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {isProfileModalOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setIsProfileModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:opacity-80 transition-opacity"
              aria-label="Close profile image"
            >
              <X size={28} />
            </button>
            <ImageWithFallback
              src="/images/profile.jpg"
              alt="Sehyun Kim profile"
              className="w-full h-auto object-cover border border-white/40"
            />
          </div>
        </div>
      )}
    </>
  );
}