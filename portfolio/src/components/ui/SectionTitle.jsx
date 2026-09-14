const sizes = {
  md: { title: "text-xl sm:text-3xl", dot: "text-4xl sm:text-5xl" },
  xl: { title: "text-4xl sm:text-5xl", dot: "text-5xl sm:text-6xl" },
};

export default function SectionTitle({ title, variant = "xl" }) {
  const size = sizes[variant] || sizes.xl;
  return (
    <h1 className={`${size.title} font-bold text-white mb-4 font-title`}>
      {title}
      <span className={`text-[#139acf] ${size.dot}`}>.</span>
    </h1>
  );
}