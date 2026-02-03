import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-2 gap-4">
        {/* Header */}
        <div>
          {" "}
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
            <span className="text-[#139acf] text-5xl sm:text-6xl md:text-6xl">
              .
            </span>
          </h1>
          <p>
            Want to start a project or have feedback for me? Let’s break it up!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
            {/* Contact Card */}
        <div className="max-w-full sm:min-w-96 min-h-64 grid grid-rows-[auto_1fr] gap-4 border-2 rounded-lg border-[#0eeae7]/20 bg-gray-900">
          {/* Card Content */}
          <div className="p-5 grid gap-2 max-w-full">
            <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-mono">
              Say Hello
              <FontAwesomeIcon icon={faHandshake} />
            </h1>

            <p className="text-[#a99f96] text-[16px] sm:text-[18px]">
              Let’s chat! Drop me a message using the form.
            </p>

            <form className="   p-6 rounded-lg text-white space-y-4">
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block mb-1 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </form>

            <button
              type="button"
              className="flex items-center gap-2 text-white border border-[#f6f6f6] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#139acf] hover:border-none transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </div>
        </div>
        {/* Networking*/}
        <div>
          <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-mono">
            Let's Connect
          </h1>
          <div></div>
          <p>Or reach me directly at:</p>
          <p>
            {" "}
            <a href="mailto:asminerazafiarivelo@gmail.com">
              asminerazafiarivelo@gmail.com
            </a>
          </p>
        </div>
        </div>
      
      </div>
    </>
  );
}
