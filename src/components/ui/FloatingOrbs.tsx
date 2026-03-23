"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Cyan orb */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-neon-cyan/[0.07] blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      {/* Purple orb */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-neon-purple/[0.06] blur-[120px]"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "5%" }}
      />
      {/* Pink orb */}
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-neon-pink/[0.05] blur-[120px]"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ bottom: "5%", left: "30%" }}
      />
    </div>
  );
}
