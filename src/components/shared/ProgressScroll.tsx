import { motion, useScroll } from "motion/react"

export default function ProgressScroll() {
    const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-15 left-0 right-0 h-1 z-50 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
    />
  );
}