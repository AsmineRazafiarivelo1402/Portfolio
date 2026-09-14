import { useEffect, useState } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";

const finePointer =
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!finePointer) return undefined;

    document.body.classList.add("cursor-hidden");

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e) => {
      const target = e.target.closest?.("a, button, input, textarea, label, [data-cursor]");
      setHovering(Boolean(target));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!finePointer) return null;

  return (
    <>
      {/* Dot */}
      <Motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-[#18F3E1] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 0.6 : hovering ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring */}
      <Motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-[#18F3E1] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.4 : pressed ? 0.8 : 1, opacity: pressed ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}