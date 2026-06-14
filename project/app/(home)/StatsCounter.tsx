"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  accentColor?: string;
}

export default function StatsCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  accentColor = "#1f66f4",
}: StatsCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, suffix, prefix, duration]);

  return (
    <div className="flex flex-col items-center gap-3 text-center group">
      <div
        className="relative text-5xl font-black tracking-tight md:text-6xl lg:text-7xl"
        style={{ color: accentColor }}
      >
        <span ref={numRef}>
          {prefix}0{suffix}
        </span>
        {/* Subtle glow behind number */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-30"
          style={{ background: accentColor }}
        />
      </div>
      <p className="text-base font-medium text-white/60 md:text-lg">{label}</p>
    </div>
  );
}
