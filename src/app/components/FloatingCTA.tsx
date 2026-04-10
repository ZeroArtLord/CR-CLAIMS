import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 left-0 right-0 px-6 z-40 animate-in slide-in-from-bottom-4 duration-300">
          <div className="max-w-md mx-auto">
            <a
              href="tel:+14073584589"
              className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-[1.25rem] transition-all duration-300 shadow-2xl shadow-accent/30 hover:shadow-[0_20px_60px_-15px] hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 backdrop-blur-sm"
              aria-label="Call now +1 (407) 358-4589"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Now: +1 (407) 358-4589</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
