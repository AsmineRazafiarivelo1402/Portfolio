import { motion as Motion } from "framer-motion";

const directions = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
  ...rest
}) {
  const offset = directions[direction] || directions.up;

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}