"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import Image from "next/image";
import { staggerItem } from "./ScrollSection";

interface FeatureCardProps {
  icon?: ReactNode;
  image?: string;        // 圖片 URL 或 /public 路徑，e.g. "/images/card-ai.png"
  imageAlt?: string;
  title: string;
  description: string;
  accentColor?: string;
}

export default function FeatureCard({
  icon,
  image,
  imageAlt = "",
  title,
  description,
  accentColor = "#1f66f4",
}: FeatureCardProps) {
  const hasImage = Boolean(image);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="feature-card group relative flex flex-col rounded-2xl cursor-default overflow-hidden"
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
      {/* ── Hover glow ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${accentColor}18, transparent 60%)`,
        }}
      />

      {/* ── Image banner (有圖才顯示) ── */}
      {hasImage && (
        <div className="relative w-full h-100 overflow-hidden">
          <Image
            src={image!}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          />
          {/* Gradient fade into card body */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(9,9,11,0.85))",
            }}
          />
          {/* Accent colour tint on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{ background: accentColor }}
          />
        </div>
      )}

      {/* ── Card body ── */}
      <div className="relative flex flex-col gap-4 p-7">
        {/* Icon (沒有圖片時才顯示，或強制要顯示 icon 時也可以同時傳) */}
        {!hasImage && icon && (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl shrink-0"
            style={{
              background: `linear-gradient(135deg, ${accentColor}30, ${accentColor}10)`,
              border: `1px solid ${accentColor}40`,
              color: accentColor,
            }}
          >
            {icon}
          </div>
        )}

        {/* 有圖片時，在 body 頂端顯示小 badge icon */}
        {hasImage && icon && (
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-base shrink-0"
            style={{
              background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}15)`,
              border: `1px solid ${accentColor}50`,
              color: accentColor,
            }}
          >
            {icon}
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-white/60">{description}</p>
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)`,
        }}
      />
    </motion.div>
  );
}