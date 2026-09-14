export default function FilterButton({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 border border-[#139acf] px-6 py-2 rounded-full transition-colors duration-300 font-body ${
        active ? "bg-[#139acf] text-white" : "text-white hover:bg-[#139acf]/20"
      }`}
    >
      {label}
    </button>
  );
}