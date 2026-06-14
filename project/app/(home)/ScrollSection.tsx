"use client";
import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

type FromDirection = "bottom" | "left" | "right" | "top" | "none";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  from?: FromDirection;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: "section" | "div" | "article";
}

const getInitial = (from: FromDirection) => {
  switch (from) {
    case "bottom":
      return { opacity: 0, y: 70 };
    case "top":
      return { opacity: 0, y: -70 };
    case "left":
      return { opacity: 0, x: -70 };
    case "right":
      return { opacity: 0, x: 70 };
    case "none":
      return { opacity: 0 };
    default:
      return { opacity: 0, y: 70 };
  }
};

const getAnimate = (from: FromDirection) => {
  switch (from) {
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "top":
    case "bottom":
      return { opacity: 1, y: 0 };
    case "none":
      return { opacity: 1 };
    default:
      return { opacity: 1, y: 0 };
  }
};

export default function ScrollSection({
  children,
  className = "",
  from = "bottom",
  delay = 0,
  duration = 0.85,
  amount = 0.15,
  once = false,
}: ScrollSectionProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(from)}
      whileInView={getAnimate(from)}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

/** 用於卡片 stagger 的 container + item variants */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
