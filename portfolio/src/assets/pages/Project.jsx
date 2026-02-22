import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import portfolio from "../images/as.png";

export default function Project() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 py-10 font-body">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 font-title">
          Project <span className="text-[#139acf] text-5xl sm:text-6xl md:text-6xl">.</span>
        </h1>

        <div className="text-[#a99f96] text-[16px] sm:text-[18px] mb-8 space-y-1 font-body">
          <p>This is where passion turns into solutions.</p>
          <p>Explore, click, and discover the story behind the code.</p>
          <p>Every project showcases my growth, creativity,</p>
          <p>and commitment to building meaningful digital experiences.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="flex items-center gap-2 border border-[#139acf] text-white px-6 py-2 rounded-full hover:transition-all duration-300 font-body">
            All
          </button>
          <button className="flex items-center gap-2 border border-[#139acf] text-white px-6 py-2 rounded-full hover:transition-all duration-300 font-body">
            React
          </button>
        </div>

        {/* Project Card */}
        <div className="max-w-full sm:max-w-96 min-h-64 grid grid-rows-[auto_1fr] gap-4 border-2 rounded-lg border-[#0eeae7]/20">
          
          {/* Image */}
          <img 
            src={portfolio} 
            alt="project"  
            className="w-full min-h-96 p-4 sm:max-h-72 rounded-t-lg object-cover "
          />

          {/* Card Content */}
          <div className="p-5 grid gap-2">
            <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-mono font-title">
              Asmine Portfolio
            </h1>

            <p className="text-[#a99f96] text-[16px] sm:text-[18px] font-body">
              My personal portfolio website to showcase my skills and project
            </p>

            <div className="flex flex-wrap gap-2 text-[#CEE2DC] mt-2 font-body">
              <p className="border-2 px-2 border-[#70867f] bg-[#70867f] rounded-lg">React</p>
              <p className="border-2 px-2 border-[#70867f] bg-[#70867f] rounded-lg">Tailwindcss</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href="https://github.com/AsmineRazafiarivelo1402/Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white border border-[#f6f6f6] px-4 sm:px-6 py-2 rounded-lg 
                hover:bg-[#139acf] hover:border-none 
                transition-all duration-300 hover:scale-105 font-body"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                Live Demo
              </a>

              <a
                href="https://github.com/AsmineRazafiarivelo1402/Portfolio.git"
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
      </div>
    </>
  );
}