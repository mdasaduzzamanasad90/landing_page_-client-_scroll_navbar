import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল হলে চেক করবে
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // স্ক্রল টপে নেওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-15 right-20 z-50
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-gradient-to-br from-primary to-primary/80
        text-white shadow-xl shadow-primary/30
        border border-white/20
        backdrop-blur-md
        transition-all duration-500
        hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 hover:brightness-110
        active:scale-95
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-8 h-8" />
    </button>
  );
};

export default ScrollToTop;
