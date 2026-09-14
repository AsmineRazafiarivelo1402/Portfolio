import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import FilterButton from "../components/ui/FilterButton";
import ProjectCard from "../components/ui/ProjectCard";
import AnimatedSection from "../components/effects/AnimatedSection";
import { projects } from "../data/fallbackData";

export default function Project() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...new Set(projects.flatMap((project) => project.tags))];
  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 font-body">
      <AnimatedSection direction="up">
        <SectionTitle title="Project" />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1} className="text-[#a99f96] text-[16px] sm:text-[18px] mb-8 space-y-1">
        <p>This is where passion turns into solutions.</p>
        <p>Explore, click, and discover the story behind the code.</p>
        <p>Every project showcases my growth, creativity,</p>
        <p>and commitment to building meaningful digital experiences.</p>
      </AnimatedSection>

      {/* Filter Buttons */}
      <AnimatedSection direction="up" delay={0.15} className="flex flex-wrap gap-4 mb-8">
        {filters.map((category) => (
          <FilterButton
            key={category}
            label={category}
            active={filter === category}
            onClick={() => setFilter(category)}
          />
        ))}
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection direction="up" delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </AnimatedSection>
    </div>
  );
}