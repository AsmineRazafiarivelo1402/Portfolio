import TechIcon from "./TechIcon";

export default function TechCategory({ title, technologies = [] }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[#f6f6f6] text-[15px] font-title">{title}</h1>
      <div className="flex gap-1 flex-wrap">
        {technologies.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}