import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHandshake,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-2 gap-6 font-body">
      
      {/* Header */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-title">
          Get In Touch
          <span className="text-[#139acf] text-5xl sm:text-6xl">.</span>
        </h1>

        <p className="text-[#a99f96] text-[16px] sm:text-[18px] mb-8 font-body">
          Want to start a project or have feedback for me? Let’s break it up!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* CONTACT CARD */}
        <div
          className="relative group min-h-64 border-2 rounded-lg border-[#0eeae7]/20 bg-gray-900 overflow-hidden font-body"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(
              "--x",
              `${e.clientX - rect.left}px`
            );
            e.currentTarget.style.setProperty(
              "--y",
              `${e.clientY - rect.top}px`
            );
          }}
        >
          {/* Hover spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(220px circle at var(--x) var(--y), rgba(19,154,207,0.25), transparent 60%)",
              filter: "blur(20px)",
            }}
          />

          {/* Content */}
          <div className="relative p-5 grid gap-4">
            <div>
              <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] flex items-center gap-2 font-title">
                Say Hello <FontAwesomeIcon icon={faHandshake} />
              </h1>

              <p className="text-[#a99f96] text-[16px] sm:text-[18px] font-body">
                Let’s chat! Drop me a message using the form.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-semibold text-[#CEE2DC] font-body">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Write Your Name"
                    className="w-full px-4 py-2 rounded-md focus:outline-none font-body"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 font-semibold text-[#CEE2DC] font-body">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className="w-full px-4 py-2 rounded-md focus:outline-none font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-[#CEE2DC] font-body">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-[#CEE2DC] font-body">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write Your Message Here"
                  className="w-full px-4 py-2 rounded-md focus:outline-none font-body"
                />
              </div>
            </form>

            <div className="flex justify-center">
              <button className="w-full sm:w-96 lg:w-full text-white border border-[#f6f6f6] py-2 rounded-lg hover:bg-[#139acf] hover:border-none transition-colors duration-300 flex items-center justify-center gap-2 font-body">
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* NETWORKING CARD */}
        <div className="p-5 font-body">
          <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-title">
            Let's Connect
          </h1>

          <div className="flex gap-5 py-4">
            <FontAwesomeIcon
              icon={faGithub}
              className="bg-gray-900 rounded-full text-4xl py-3.5 px-3 text-white transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-white hover:text-gray-900"
            />

            <FontAwesomeIcon
              icon={faSquareLinkedin}
              className="bg-gray-900 rounded-full text-4xl py-3.5 px-3 text-white transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-white hover:text-gray-900"
            />

            <FontAwesomeIcon
              icon={faFacebook}
              className="bg-gray-900 rounded-full text-4xl py-3.5 px-3 text-white transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-white hover:text-gray-900"
            />
          </div>

          <p className="text-xl p-2 text-[#CEE2DC] font-body">
            Or reach me directly at:
          </p>

          <p className="flex gap-3 items-center font-body">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />

            <a
              href="mailto:asminerazafiarivelo@gmail.com"
              className="text-white text-xl"
            >
              asminerazafiarivelo@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}