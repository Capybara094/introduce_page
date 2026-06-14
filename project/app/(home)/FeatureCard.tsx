"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { staggerItem } from "./ScrollSection";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor = "#1f66f4",
}: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="feature-card group relative flex flex-col gap-4 rounded-2xl p-7 cursor-default"
      style={
        {
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          "--accent": accentColor,
        } as React.CSSProperties
      }
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${accentColor}18, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
        style={{
          background: `linear-gradient(135deg, ${accentColor}30, ${accentColor}10)`,
          border: `1px solid ${accentColor}40`,
          color: accentColor,
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)`,
        }}
      />
    </motion.div>
  );
}
