import SectionTitle from "./SectionTitle";
import TimelineCard from "./TimelineCard";

export default function TimelineSection({ title, items = [] }) {
  return (
    <div>
      <SectionTitle title={title} variant="md" />
      <div className="grid grid-cols-1 gap-y-5">
        {items.map((item, i) => (
          <TimelineCard key={item.title || i} {...item} />
        ))}
      </div>
    </div>
  );
}