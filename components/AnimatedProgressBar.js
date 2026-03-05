// components/AnimatedProgressBar.js
import { useEffect, useRef, useState } from "react";

export default function AnimatedProgressBar({
  value = 0,
  color = "green", // "green", "gray", "black"
  className = "",
}) {
  const [inView, setInView] = useState(false);
  const barRef = useRef(null);

  // Map color prop to custom hex colors
  const colorMap = {
    green: "#16a34a", // Tailwind green-500
    gray: "#718096",  // Tailwind gray-500
    black: "#131315", // custom black
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className={`h-2 bg-[#e4e4e7] rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{
          width: inView ? `${value}%` : "0%",
          backgroundColor: colorMap[color] || colorMap.green,
        }}
      />
    </div>
  );
}