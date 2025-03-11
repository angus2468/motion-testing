import * as motion from "motion/react-client";

export default function EnterAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={ball}
      className="flex justify-center items-center "
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#6b6d6e",
  borderRadius: "50%",
  border: "solid white 2px",
};
