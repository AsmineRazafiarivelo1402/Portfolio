import { motion as Motion } from "framer-motion";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/ui/Button";
import { profile } from "../data/fallbackData";
import profileImage from "../assets/images/logo.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center lg:py-40 px-6 sm:px-10 md:px-20 gap-10 font-body">
      {/* LEFT SIDE */}
      <Motion.div
        className="flex-1 flex justify-center text-center md:text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4 max-w-xl">
          <Motion.p
            variants={item}
            className="text-white uppercase tracking-wide text-sm sm:text-base"
          >
            {profile.greeting}
          </Motion.p>

          <Motion.p variants={item} className="text-white text-xl sm:text-2xl">
            I'm{" "}
            <span className="text-[#E29D1E] px-2 py-1 rounded text-2xl sm:text-4xl font-semibold inline-block font-title">
              {profile.name}
            </span>
          </Motion.p>

          <Motion.p
            variants={item}
            className="text-[#09EDE9] font-medium text-2xl sm:text-4xl font-title"
          >
            {profile.title}
          </Motion.p>

          <Motion.hr variants={item} className="w-16 md:w-[20%] border-[#E29D1E] mx-auto md:mx-0" />

          <Motion.p
            variants={item}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#E29D1E] to-[#0eeae7] hover:from-[#0eeae7] hover:to-[#E29D1E] transition-all duration-300 font-medium text-xl sm:text-3xl font-title"
          >
            {profile.tagline}
          </Motion.p>

          {/* BUTTONS */}
          <Motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6"
          >
            <Button variant="amber" icon={faDownload} iconPosition="before">
              {profile.cvLabel}
            </Button>

            <Button variant="cyan" icon={faArrowRight}>
              Explore
            </Button>
          </Motion.div>
        </div>
      </Motion.div>

      {/* RIGHT SIDE */}
      <Motion.div
        className="flex-1 flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <img
          src={profileImage}
          alt="asmine_profil"
          className="w-24 h-24 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#E29D1E]"
        />
      </Motion.div>
    </div>
  );
}