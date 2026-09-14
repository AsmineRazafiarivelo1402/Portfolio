import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as Motion } from "framer-motion";

export default function TechIcon({
  name,
  icon,
  svgPath,
  colorClass,
  borderClass,
  iconSize = "text-4xl",
}) {
  return (
    <Motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`relative group cursor-pointer p-1 rounded-lg border ${borderClass} bg-black/20 flex justify-center items-center`}
    >
      {svgPath ? (
        <svg viewBox="0 0 24 24" className={`w-10 h-10 fill-current ${colorClass}`}>
          <path d={svgPath} />
        </svg>
      ) : (
        <FontAwesomeIcon icon={icon} className={`${colorClass} ${iconSize}`} />
      )}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </Motion.div>
  );
}