import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <div>
        <div>
          <img src="" alt="asmine profil" />
          <div>
            <p>Hi there,I'm Asmine RAZAFIARIVELO</p>
            <p>
              Ecosystem software student at HEI Madagascar with a strong
              interest in QA.
            </p>
            <p>Interested in UX, accessibility, and user safety.</p>
            <p>Learning backend basics and manual/automated testing.</p>
            <p>Aiming to become a reliable QA specialist focused on quality.</p>
          </div>
          <div>
            <h2>Tools & Technologies I use</h2>
            <div className="grid grid-row-2">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Front-end</h3>

                    <div className="flex gap-6 flex-wrap">
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
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tools</h3>

                    <div className="flex gap-6 flex-wrap">
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
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Front-end</h3>

                    <div className="flex gap-6 flex-wrap">
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
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tools</h3>

                    <div className="flex gap-6 flex-wrap">
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
        <div></div>
      </div>
    </>
  );
}
