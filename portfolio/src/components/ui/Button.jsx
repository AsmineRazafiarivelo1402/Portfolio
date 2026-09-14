import { motion as Motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
  cyan: "border border-[#0eeae7] bg-[#0eeae7]/20 text-white hover:translate-x-1",
  amber: "border border-[#E29D1E] bg-[#E29D1E]/20 text-white hover:translate-x-1",
  outline:
    "border border-[#f6f6f6] text-white hover:bg-[#139acf] hover:border-none transition-colors duration-300",
};

export default function Button({
  children,
  icon,
  iconPosition = "after",
  variant = "outline",
  href,
  onClick,
  type = "button",
  className = "",
}) {
  const iconEl = icon ? <FontAwesomeIcon icon={icon} /> : null;
  const content = (
    <>
      {iconPosition === "before" && iconEl}
      <span>{children}</span>
      {iconPosition === "after" && iconEl}
    </>
  );

  const classes = `flex items-center justify-center gap-2 px-6 py-2 rounded transition-all duration-300 font-body ${variants[variant]} ${className}`;
  const motionProps = { whileTap: { scale: 0.97 }, whileHover: { scale: 1.02 } };

  if (href) {
    return (
      <Motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps}>
        {content}
      </Motion.a>
    );
  }

  return (
    <Motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {content}
    </Motion.button>
  );
}