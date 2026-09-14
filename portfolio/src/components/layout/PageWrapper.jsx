import { motion as Motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}