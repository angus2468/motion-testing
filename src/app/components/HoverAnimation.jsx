import * as motion from "motion/react-client";
export default function HoverAnimation({ children }) {
  return (
    <motion.h1
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={{
        top: "30%",
        left: "30%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      whileHover={{ scale: 1.1 }}
    >
      js
    </motion.h1>
  );
}
