import SectionTitle from "../components/ui/SectionTitle";
import TechCategory from "../components/ui/TechCategory";
import TimelineSection from "../components/ui/TimelineSection";
import AnimatedSection from "../components/effects/AnimatedSection";
import Button from "../components/ui/Button";
import { profile, bio, techCategories, experiences, educations } from "../data/fallbackData";
import profileImage from "../assets/images/profil_about.png";

export default function About() {
  return (
    <div className="grid grid-cols-1 mx-auto max-w-6xl px-6 py-10 gap-6 font-body">
      <AnimatedSection direction="up">
        <SectionTitle title="About Me" />
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row gap-5">
        <AnimatedSection direction="left" className="flex flex-col gap-10 max-w-64 min-h-96">
          <img
            src={profileImage}
            alt="asmine profil"
            className="rounded-t-[20px] rounded-l-[20px] object-cover h-[21rem]"
          />

          <Button variant="outline" className="w-full sm:w-64 lg:w-full py-2">
            {profile.resumeLabel}
          </Button>
        </AnimatedSection>

        <div className="flex flex-col">
          <AnimatedSection direction="right" className="max-h-64 py-2 px-1 md:text-[20px] min-w-[10rem] text-[#f6f6f6] text-[15px] hover:bg-[#474747] hover:rounded-lg transition duration-700 ease-in-out">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1} className="flex flex-col gap-3 w-full py-5">
            <h2 className="text-[#f6f6f6] text-[20px] font-title">
              Tools & Technologies I use
            </h2>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-3">
                <TechCategory {...techCategories[0]} />
                <TechCategory {...techCategories[1]} />
              </div>

              <div className="flex flex-col gap-3">
                <TechCategory {...techCategories[2]} />
                <TechCategory {...techCategories[3]} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="md:flex md:flex-row md:gap-10">
        <AnimatedSection direction="left">
          <TimelineSection title="Experience" items={experiences} />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15}>
          <TimelineSection title="Education" items={educations} />
        </AnimatedSection>
      </div>
    </div>
  );
}