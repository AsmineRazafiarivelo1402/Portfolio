import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png" 
export default function Home() {
  return (
    <div
      className="flex flex-col-reverse
                 md:flex-row
                 items-center
                 lg:py-40
                
                 px-6 sm:px-10 md:px-20
                 bg-[#1e1e1e]
                 gap-10"
    >

      {/* LEFT SIDE */}
      <div className="flex-1 flex justify-center text-center md:text-left ">
        <div className="space-y-4 max-w-xl ">

          <p className="text-white uppercase tracking-wide text-sm sm:text-base">
            Hi there, welcome to my site
          </p>

          <p className="text-white text-xl sm:text-2xl">
            I'm{" "}
            <span className="text-[#E29D1E] px-2 py-1 rounded
                             text-2xl sm:text-4xl font-semibold inline-block">
              Asmine RAZAFIARIVELO
            </span>
          </p>

          <p className="text-[#09EDE9] font-medium
                        text-2xl sm:text-4xl">
            Software Quality Assurance
          </p>

          <p className="text-white text-2xl sm:text-4xl">
            <span className="text-[#E29D1E]">&</span>{" "}
            Testing Specialization
          </p>

          <hr className="w-16 md:w-[20%] border-[#E29D1E] mx-auto md:mx-0" />

          <p
            className="text-transparent bg-clip-text bg-gradient-to-r
                       from-[#E29D1E] to-[#0eeae7]
                       hover:from-[#0eeae7] hover:to-[#E29D1E]
                       transition-all duration-300
                       font-medium
                       text-xl sm:text-3xl"
          >
            Let’s build better software together.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row
                          items-center
                          justify-center md:justify-start
                          gap-4 pt-6">

            <button
              type="button"
              className="flex items-center gap-2 border border-[#E29D1E]
                         bg-[#E29D1E]/20 text-white
                         px-6 py-2 rounded
                         hover:translate-x-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>

            <button
              type="button"
              className="flex items-center gap-2 border border-[#0eeae7]
                         bg-[#0eeae7]/20 text-white
                         px-6 py-2 rounded
                         hover:translate-x-1 transition-all duration-300"
            >
              Explore
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center">
        <img
          src={logo}
          alt="asmine_profil"
          className="
            w-48 h-48
            sm:w-64 sm:h-64
            md:w-80 md:h-80
            object-cover
            rounded-full
            border-4 border-[#E29D1E]
          "
        />
      </div>

    </div>
  );
}
