export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(60% 60% at 10% 10%, rgba(14,234,231,0.16), transparent 70%),
          radial-gradient(58% 58% at 90% 15%, rgba(19,154,207,0.13), transparent 70%),
          radial-gradient(64% 64% at 90% 90%, rgba(227,157,30,0.16), transparent 70%),
          radial-gradient(56% 56% at 15% 86%, rgba(24,243,225,0.11), transparent 70%),
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, auto, auto, 28px 28px, 28px 28px",
        backgroundColor: "#1e1e1e",
      }}
    />
  );
}