import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faJava,
  faNodeJs,
  faPython,
  faGit,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.png";
export default function About() {
  return (
    <>
      <div className="grid grid-col sm:mx-auto md:mx-auto  max-w-6xl sm:max-w-6xl  px-6 py-10 md:grid md:grid-cols-1 lg:grid-2  gap-6 ">
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
            <div className=" max-h-64 py-2 my-2 px-1 md:text-[20px] min-w-[10rem] text-[#f6f6f6] text-[15px] hover:border-1 hover:bg-[#474747] hover:rounded-lg transform transition hover:scale-y-125 duration-700 ease-in-out  ">
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
            <div className="flex flex-col gap-3 w-full  py-5">
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
                      {/* Postman */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-orange-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="text-orange-500 text-3xl p-1/2"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Postman
                        </span>
                      </div>

                      {/* Git */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-red-600 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faGit}
                          className="text-red-600 text-4xl p-1/2"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Git
                        </span>
                      </div>

                      {/* GitHub */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-gray-300 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="text-gray-300 text-4xl p-1/2"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          GitHub
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
                      {/* NodeJS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-green-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className="text-green-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          NodeJS
                        </span>
                      </div>

                      {/* ExpressJS */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-gray-400 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faNodeJs}
                          className="text-gray-400 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ExpressJS
                        </span>
                      </div>
                      {/* Python */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-yellow-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faPython}
                          className="text-yellow-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Python
                        </span>
                      </div>
                      {/* PostgreSQL */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-blue-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faDatabase}
                          className="text-blue-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          PostgreSQL
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
                      {/* Figma */}
                      <div
                        className="relative group cursor-pointer p-1 rounded-lg 
  border border-pink-500 bg-black/20 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faFigma}
                          className="text-pink-500 text-4xl"
                        />
                        <span
                          className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Figma
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row gap-y-[10rem] sm:gap-x-10 ">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-white mb-4">
              Experience
              <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
            </h1>
            <div className="grid grid-3 gap-y-5  ">
              <div className="flex gap-4">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48 bg-red-200   sm:w-96 ">
                  <div className="flex justify-between px-2 h-1/2  items-center text-[16px]">
                    <h1 className="text-[#1214b6] ">Assistant Productory</h1>
                    <p>Oct 2024</p>
                  </div>
                  <div className="flex flex-col px-2  h-1/2 ">
                    <p>
                      <a
                        href="http://fireflies.mg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-[18px]"
                      >
                        Fireflies.mg
                      </a>
                    </p>
                    <p>I was an assistant productor, responsible of CRM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48 bg-red-200 sm:w-96">
                  <div className="flex justify-between px-2  h-1/2  items-center text-[16px]">
                    <h1 className="text-[#1214b6]">Developer Website</h1>
                    <p>2022-2023</p>
                  </div>
                  <div className="flex flex-col px-2 h-1/2  ">
                    <p className="text-blue-500 hover:underline text-[15px]">
                      GUERREROS CLUB MADAGASCAR
                    </p>
                    <p>
                      Your last project in{" "}
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PNM.
                      </a>
                      We was 5 student in group to realize it
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48  bg-red-200 sm:w-96">
                  <div className="flex justify-between px-2  h-1/2  items-center">
                    <h1 className="text-[#1214b6]">Quality Assurant</h1>
                    <p>2022-2023</p>
                  </div>
                  <div className="flex flex-col px-2 h-1/2  ">
                    <p className="text-blue-500 hover:underline text-[17px]">
                      GAMA TEXTILE MADAGASCAR
                    </p>
                    <p>I was responsable of customer command</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-white mb-4">
              Education
              <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
            </h1>
            <div className="grid grid-3 gap-y-5">
              <div className="flex gap-4">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48  bg-red-200 sm:w-96">
                  <div className="flex justify-between px-2  h-1/2  items-center">
                    <h1 className="text-[#1214b6]">Software Student</h1>
                    <p>2024-Actually</p>
                  </div>
                  <div className="flex flex-col px-2 h-1/2 ">
                    <p>
                      <a
                        href="https://hei.school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-[16px]"
                      >
                        HEI MADAGASCAR
                      </a>
                    </p>
                    <p>I am a software student </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48  bg-red-200 sm:w-96">
                  <div className="flex justify-between px-2  h-1/2  items-center">
                    <h1 className="text-[#1214b6]">Preparatory Year</h1>
                    <p>Jan-Oct 2024</p>
                  </div>
                  <div className="flex flex-col px-2  h-1/2  ">
                    <p>
                      <a
                        href="https://www.passerellesnumeriques.org/fr/what-we-do/madagascar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-[18px]"
                      >
                        PNM Madagascar
                      </a>
                    </p>
                    <p className="text-[15px]">
                      About initialization in IT,digital technology , Project
                      Management and public speaking
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <h1 className="border h-45 w-[4px] bg-[#858581] rounded-full border-[#858581]"></h1>
                <div className="border-bg-red-200 rounded-lg w-64 h-48 bg-red-200 sm:w-96">
                  <div className="flex justify-between px-2  h-1/2  items-center">
                    <h1 className="text-[#1214b6]">High School diploma C</h1>
                    <p>2021</p>
                  </div>
                  <div className="flex flex-col px-2 h-1/2   ">
                    <p>
                      <a
                        href="https://web.facebook.com/antsirabeSaintjo/?locale=fr_FR&_rdc=1&_rdr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-[18px]"
                      >
                        St Joseph Antsirabe
                      </a>
                    </p>
                    <p>
                      I've been doing my high school at Antsirabe and I've got
                      diploma C
                    </p>
                  </div>
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
