import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ title, description, image, tags = [], liveUrl, codeUrl }) {
  return (
    <div className="max-w-full sm:max-w-96 grid grid-rows-[auto_1fr] gap-4 border-2 rounded-lg border-[#0eeae7]/20 transition-all duration-300 hover:scale-[1.02] hover:border-[#0eeae7]/60 hover:shadow-[0_0_25px_-5px_rgba(14,234,231,0.4)]">
      <img
        src={image}
        alt={title}
        className="w-full min-h-96 sm:max-h-72 p-4 rounded-t-lg object-cover"
      />

      <div className="p-5 grid gap-2">
        <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-title">{title}</h1>

        <p className="text-[#a99f96] text-[16px] sm:text-[18px] font-body">{description}</p>

        <div className="flex flex-wrap gap-2 text-[#CEE2DC] mt-2 font-body">
          {tags.map((tag) => (
            <span key={tag} className="border-2 px-2 border-[#70867f] bg-[#70867f] rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white border border-[#f6f6f6] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#139acf] hover:border-none transition-all duration-300 hover:scale-105 font-body"
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            Live Demo
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white border border-[#f6f6f6] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#139acf] hover:border-none transition-colors duration-300 font-body"
          >
            <FontAwesomeIcon icon={faGithub} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}