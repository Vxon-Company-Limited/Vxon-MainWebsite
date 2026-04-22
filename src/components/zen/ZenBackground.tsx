"use client";

import { useIsZen } from "@/hooks/useThemeAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/zen/forest-rays.jpg",
  "/assets/zen/tree-sunlight.jpg",
  "/assets/zen/forest-light.jpg",
  "/assets/zen/misty-forest.jpg",
];

export function ZenBackground() {
  const isZen = useIsZen();

  return (
    <AnimatePresence>
      {isZen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src={images[0]}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                rgba(250,248,245,0.82) 0%,
                rgba(250,248,245,0.7) 30%,
                rgba(250,248,245,0.75) 60%,
                rgba(250,248,245,0.88) 100%
              )`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
