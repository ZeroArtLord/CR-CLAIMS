import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario hace scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para hacer scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 sm:bottom-8 sm:right-8 z-30 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white rounded-2xl shadow-2xl shadow-accent/30 hover:shadow-3xl hover:shadow-accent/40 transition-all duration-300 flex items-center justify-center group animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2} />

          {/* Efecto de brillo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Tooltip en hover */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-foreground/90 text-background text-xs font-light rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Back to top
            <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-foreground/90 rotate-45"></div>
          </div>
        </button>
      )}
    </>
  );
}