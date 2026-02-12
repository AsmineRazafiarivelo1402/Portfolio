import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.png";
export default function About() {
  return (
    <>
      <div className="grid grid-col max-w-6xl mx-auto px-6 py-10 md:grid md:grid-cols-1 lg:grid-2  gap-6 ">
        <div className="max-h-24  ">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 ">
            About Me
            <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-10  max-w-64 min-h-96">
            <img
              src={logo}
              alt="asmine profil"
              className="rounded-t-[20px] rounded-l-[20px] object-cover h-[21rem]"
            />
            <button
              type="button"
              className="w-full sm:w-64 lg:w-full text-white border border-[#f6f6f6] py-2 rounded-lg hover:bg-[#139acf] hover:border-none transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Read My Resume
            </button>
          </div>
          <div className="flex flex-col  ">
            <div className=" max-h-64 py-2 my-2 px-5 md:text-[20px] min-w-[10rem] text-[#f6f6f6] text-[15px] hover:border-1 hover:bg-[#474747] hover:rounded-lg transform transition hover:scale-y-125 duration-700 ease-in-out  ">
              <p>Hi there,I'm Asmine RAZAFIARIVELO</p>
              <p>
                Ecosystem software student at HEI Madagascar with a strong
                interest in QA.
              </p>
              <p>Interested in UX, accessibility, and user safety.</p>
              <p>Learning backend basics and manual/automated testing.</p>
              <p>
                Aiming to become a reliable QA specialist focused on quality.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full  p-5">
              <div className="text-[#f6f6f6] text-[20px] bold">
                <h1>Tools & Technologies I use</h1>
              </div>
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5">
                {/* Right */}
                <div className="flex flex-col gap-3 ">
                  {/* Front-end */}
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#f6f6f6] text-[15px]">Front-end</h1>
                    <div className="flex gap-1 flex-wrap">
                      {/* JavaScript */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-yellow-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faSquareJs}
                          className="text-yellow-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          JavaScript
                        </span>
                      </div>

                      {/* React */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faReact}
                          className="text-sky-400 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          React
                        </span>
                      </div>

                      {/* HTML */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-orange-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className="text-orange-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          HTML
                        </span>
                      </div>

                      {/* CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-blue-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCss3Alt}
                          className="text-blue-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          CSS
                        </span>
                      </div>

                      {/* Tailwind CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-10 h-10 fill-sky-400"
                          aria-label="Tailwind "
                        >
                          <title>Tailwind CSS</title>
                          <path d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.741 1.907 1.352C13.68 11.155 14.742 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.741-1.907-1.352C15.32 6.845 14.258 5.75 12 5.75z" />
                        </svg>
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Tailwind
                        </span>
                      </div>

                      {/* Java */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-red-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faJava}
                          className="text-red-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Java
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Tools */}
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#f6f6f6] text-[15px]">Tools</h1>
                    <div className="flex gap-1 flex-wrap">
                      {/* JavaScript */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-yellow-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faSquareJs}
                          className="text-yellow-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          JavaScript
                        </span>
                      </div>

                      {/* React */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faReact}
                          className="text-sky-400 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          React
                        </span>
                      </div>

                      {/* HTML */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-orange-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className="text-orange-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          HTML
                        </span>
                      </div>

                      {/* CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-blue-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCss3Alt}
                          className="text-blue-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          CSS
                        </span>
                      </div>

                      {/* Tailwind CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-10 h-10 fill-sky-400"
                          aria-label="Tailwind CSS"
                        >
                          <title>Tailwind CSS</title>
                          <path d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.741 1.907 1.352C13.68 11.155 14.742 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.741-1.907-1.352C15.32 6.845 14.258 5.75 12 5.75z" />
                        </svg>
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Tailwind CSS
                        </span>
                      </div>

                      {/* Java */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-red-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faJava}
                          className="text-red-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Java
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Left */}
                <div className="flex flex-col gap-3">
                  {/* Front-end */}
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#f6f6f6] text-[15px]">Back-end</h1>
                    <div className="flex gap-1 flex-wrap">
                      {/* JavaScript */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-yellow-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faSquareJs}
                          className="text-yellow-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          JavaScript
                        </span>
                      </div>

                      {/* React */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faReact}
                          className="text-sky-400 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          React
                        </span>
                      </div>

                      {/* HTML */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-orange-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className="text-orange-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          HTML
                        </span>
                      </div>

                      {/* CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-blue-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCss3Alt}
                          className="text-blue-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          CSS
                        </span>
                      </div>

                      {/* Tailwind CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-10 h-10 fill-sky-400"
                          aria-label="Tailwind CSS"
                        >
                          <title>Tailwind CSS</title>
                          <path d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.741 1.907 1.352C13.68 11.155 14.742 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.741-1.907-1.352C15.32 6.845 14.258 5.75 12 5.75z" />
                        </svg>
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Tailwind CSS
                        </span>
                      </div>

                      {/* Java */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-red-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faJava}
                          className="text-red-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Java
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Tools */}
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#f6f6f6] text-[15px]">UI Design</h1>
                    <div className="flex gap-1 flex-wrap">
                      {/* JavaScript */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-yellow-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faSquareJs}
                          className="text-yellow-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          JavaScript
                        </span>
                      </div>

                      {/* React */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faReact}
                          className="text-sky-400 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          React
                        </span>
                      </div>

                      {/* HTML */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-orange-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className="text-orange-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          HTML
                        </span>
                      </div>

                      {/* CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-blue-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCss3Alt}
                          className="text-blue-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          CSS
                        </span>
                      </div>

                      {/* Tailwind CSS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-sky-400 bg-black/20 flex justify-center items-center"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-10 h-10 fill-sky-400"
                          aria-label="Tailwind CSS"
                        >
                          <title>Tailwind CSS</title>
                          <path d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.741 1.907 1.352C13.68 11.155 14.742 12.25 17 12.25c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.741-1.907-1.352C15.32 6.845 14.258 5.75 12 5.75z" />
                        </svg>
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Tailwind CSS
                        </span>
                      </div>

                      {/* Java */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
                      border border-red-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faJava}
                          className="text-red-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Java
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row gap-y-[10rem] gap-x-10 ">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-white mb-4">
              Experience
              <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
            </h1>
            <div className="flex gap-4">
              <h1 className="border h-32 w-[4px] bg-[#858581]"></h1>
              <div className="border rounded-lg w-96  bg-red-200">
                <div className="flex justify-around h-1/2  items-center">
                  <h1 className="text-[#1214b6]">Self Employed</h1>
                  <p>2022-2023</p>
                </div>
                <div className="flex flex-col px-10 h-1/2 text-1xl ">
                  <p>Quality Assurance</p>
                  <p>I was responsable of customer command</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-white mb-4">
              Education
              <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
            </h1>
            <div className="flex gap-4">
              <h1 className="border h-32 w-[4px] bg-[#858581]"></h1>
              <div className="border rounded-lg w-96  bg-red-200">
                <div className="flex justify-around h-1/2  items-center">
                  <h1 className="text-[#1214b6]">Software Student</h1>
                  <p>2024-Actually</p>
                </div>
                <div className="flex flex-col px-10 h-1/2 text-1xl ">
                  <p>
                    <a href="">HEI</a>
                  </p>
                  <p>I am a software student </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
