"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollButton() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Prevent problems on pages that don't need scrolling
      if (maxScroll <= 0) {
        setShowUp(false);
        return;
      }

      // 50% point of the actual scrollable area
      const halfPoint = maxScroll / 2;

      if (scrollTop >= halfPoint) {
        setShowUp(true);
      } else {
        setShowUp(false);
      }
    };

    // Run immediately
    checkScrollPosition();

    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const handleScroll = () => {
    if (showUp) {
      // Bottom half → go to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Top half → go to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label={showUp ? "Go to top" : "Go to bottom"}
      className="
  fixed
  right-6
  bottom-6
  z-[9999]

  w-14
  h-14
  rounded-full

  flex
  items-center
  justify-center

  cursor-pointer

  bg-gradient-to-br
  from-emerald-400/80
  via-green-500/70
  to-emerald-600/80

  backdrop-blur-xl
  backdrop-saturate-150

  border
  border-white/50

  text-white

  shadow-[0_8px_30px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.8)]

  transition-all
  duration-300
  ease-out

  hover:from-emerald-400
  hover:via-green-500
  hover:to-emerald-600
  hover:scale-110

  active:scale-95
"
    >
      {showUp ? (
        <ArrowUp size={24} strokeWidth={2.2} />
      ) : (
        <ArrowDown size={24} strokeWidth={2.2} />
      )}
    </button>
  );
}
