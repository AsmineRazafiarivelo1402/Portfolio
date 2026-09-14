import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/ui/SectionTitle";
import SocialIcon from "../components/ui/SocialIcon";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/effects/AnimatedSection";
import { socialLinks, email } from "../data/fallbackData";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
    alert("Message envoyé !");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 gap-6 font-body">
      <AnimatedSection direction="up">
        <SectionTitle title="Get In Touch" />
        <p className="text-[#a99f96] text-[16px] sm:text-[18px] mb-8">
          Want to start a project or have feedback for me? Let’s break it up!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* CONTACT CARD */}
        <AnimatedSection
          direction="left"
          className="relative group min-h-64 border-2 rounded-lg border-[#0eeae7]/20 bg-gray-900 overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
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

              <p className="text-[#a99f96] text-[16px] sm:text-[18px]">
                Let’s chat! Drop me a message using the form.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-semibold text-[#CEE2DC]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Write Your Name"
                    className="w-full px-4 py-2 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 font-semibold text-[#CEE2DC]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@gmail.com"
                    className="w-full px-4 py-2 rounded-md focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-[#CEE2DC]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-[#CEE2DC]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write Your Message Here"
                  className="w-full px-4 py-2 rounded-md focus:outline-none"
                />
              </div>

              <div className="flex justify-center">
                <Button type="submit" icon={faPaperPlane} className="w-full sm:w-96 lg:w-full py-2">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* NETWORKING CARD */}
        <AnimatedSection direction="right" delay={0.1} className="p-5">
          <h1 className="font-bold text-[20px] sm:text-[22px] text-[#CEE2DC] font-title">
            Let's Connect
          </h1>

          <div className="flex gap-5 py-4">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} {...social} />
            ))}
          </div>

          <p className="text-xl p-2 text-[#CEE2DC]">Or reach me directly at:</p>

          <p className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
            <a href={`mailto:${email}`} className="text-white text-xl">
              {email}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}