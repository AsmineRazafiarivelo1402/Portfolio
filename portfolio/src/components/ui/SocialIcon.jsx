import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({ icon, href = "#", label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 rounded-full text-4xl py-3.5 px-3 text-white transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-white hover:text-gray-900"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}