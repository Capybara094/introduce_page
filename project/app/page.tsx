"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from "@/app/(home)/BlurText";
import ScrollReveal from "@/app/(home)/ScrollReveal";
import ScrollSection, { staggerContainer, staggerItem } from "@/app/(home)/ScrollSection";
import FeatureCard from "@/app/(home)/FeatureCard";
import StatsCounter from "@/app/(home)/StatsCounter";

/* ─── Feature card data ─────────────────────────────────── */
const FEATURES = [
  {
    title: "改裝前",
    image:"/改裝前.JPG",
    imageAlt:"機器狗改裝前原廠外觀",
    description:
      "原廠 Go2 機器狗，尚未加裝任何感測器與運算模組的初始狀態。",
    accentColor: "#1f66f4",
  },
  {
    title: "硬體改裝後",
    image:"/硬體改裝.JPG",
    imageAlt:"機器狗硬體改裝後",
    description:
      "加裝深度攝影機、外接喇叭、LIDAR、PawAI Brain 與 PawAI Studio 後的完整形態。",
    accentColor: "#8b5cf6",
  }
];

/* ─── Stats data ────────────────────────────────────────── */
const STATS = [
  { value: 7, suffix: "+", label: "軟硬體技術介紹", accentColor: "#1f66f4" },
  { value: 5, suffix: "+", label: "技術介紹", accentColor: "#8b5cf6" },
  { value: 10, suffix: "+", label: "技術探索分享", accentColor: "#06b6d4" },
];

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    /*
     * ⚠️  -mx-4 md:-mx-6 lg:-mx-[max(2rem,calc((100vw-var(--fd-layout-width,1400px))/2))]
     *    突破 Fumadocs layout 的左右 padding，讓整個首頁全版面。
     *    若你的 (home)/layout.tsx 已移除容器限制，可刪除這個 className。
     */
    <div
      className="flex flex-col -mx-4 md:-mx-6"
      style={{ background: "var(--color-fd-background, #09090b)" }}
    >

      {/* ══════════════════════════════════════════════════════
          Section 1 — Hero
      ════════════════════════════════════════════════════════ */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center gap-10 px-6">
        {/* Background radial glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(31,102,244,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid lines */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top-left corner accent */}
        <div
          className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-1/3"
          style={{ background: "linear-gradient(90deg, transparent, rgba(31,102,244,0.6))" }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 -z-10 h-1/4 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(31,102,244,0.4))" }}
        />

        {/* ── Title ── */}
        <BlurText
          text="歡迎進入 PawAI 工程筆記"
          delay={180}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => setShowContent(true)}
          /* justify-center 已在 BlurText 內部修正，這裡只需 text-center */
          className="w-full max-w-5xl text-center text-5xl font-black leading-[1.15] tracking-tight md:text-7xl lg:text-8xl"
        />

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-lg text-center text-lg leading-relaxed text-white/50 md:text-xl"
        >
          PawAI:基於多模態感知融合之自主尋物與具身互動。
        </motion.p>


        {/* ── Scroll hint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
            向下滾動
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-white/25 text-sm"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Section 2 — 大標語（ScrollReveal 逐字顯現）
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(31,102,244,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto w-full max-w-4xl text-center">
          <ScrollSection from="none" amount={0.1}>
            <p className="mb-10 text-blg font-bold uppercase tracking-[0.3em] text-blue-400">
              甚麼是PawAI?
            </p>
          </ScrollSection>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur
            baseRotation={2}
            blurStrength={5}
            containerClassName="text-center"
            textClassName="text-center"
          >
            1.原廠硬體為基礎的二次開發
            2.整合多模態感知、視覺辨識、語音互動、邊緣推理、ROS2導航與任務決策模組
            3.一個能在居家或機構守護人的Physical AI原型
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Section 3 — 特色功能卡片
      ════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        {/* Divider line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1))" }}
        />

        <div className="mx-auto max-w-6xl">
          <ScrollSection from="bottom" className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
              歷程
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
              機器狗的前後對比
            </h2>
            <p className="mt-5 text-lg text-white/45 max-w-xl mx-auto">
              深度攝影機、外接喇叭、LIDAR、PawAI Brain、PawAI Studio
            </p>
          </ScrollSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto"
          >
            {FEATURES.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Section 4 — 數據亮點
      ════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />
        {/* Horizontal rule */}
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
        />

        <div className="mx-auto max-w-5xl">
          <ScrollSection from="bottom" className="mb-20 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              PawAI工程筆記
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              可追溯、可驗證、可分享、可延續
            </h2>
          </ScrollSection>

          <div className="grid gap-12 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <ScrollSection key={stat.label} from="bottom" delay={i * 0.12}>
                <StatsCounter {...stat} />
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Section 5 — 格言 ScrollReveal
      ════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <ScrollSection from="bottom">
            <p className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
              重要的是
            </p>
          </ScrollSection>
          <ScrollReveal
            baseOpacity={0.08}
            enableBlur
            baseRotation={2}
            blurStrength={4}
            containerClassName="text-center"
            textClassName="text-center"
          >
            工程筆記承載了開源精神，希望能被學習、被複製、被改良、被擴散
          </ScrollReveal>
          <ScrollSection from="bottom" delay={0.3} className="mt-6">
            <p className="text-sm text-white/35 tracking-wide">— PawAI組</p>
          </ScrollSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Section 6 — CTA
      ════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-44 overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(31,102,244,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Animated rings */}
        {[
          { size: "h-80 w-80", delay: 0, base: 1, peak: 1.1 },
          { size: "h-[520px] w-[520px]", delay: 0.6, base: 1, peak: 1.08 },
          { size: "h-[720px] w-[720px]", delay: 1.1, base: 1, peak: 1.06 },
        ].map((ring, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [ring.base, ring.peak, ring.base],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: ring.delay }}
            className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 ${ring.size} -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/25`}
          />
        ))}

        <div className="mx-auto max-w-3xl text-center">
          <ScrollSection from="bottom" className="flex flex-col items-center gap-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              準備好了嗎
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl leading-tight">
              開始你的<br />PawAI之旅
            </h2>
            <p className="max-w-md text-lg text-white/45 leading-relaxed">
              所有筆記免費開放，無需登入，深入閱讀。
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/docs"
                className="group relative rounded-full bg-blue-600 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/40 active:scale-95"
              >
                立即開始閱讀 →
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="relative border-t border-white/5 py-10 text-center">
        <ScrollSection from="none">
          <p className="text-xs text-white/20 tracking-widest uppercase">
            PawAI 工程筆記 · 分享知識及技術
          </p>
        </ScrollSection>
      </div>

    </div>
  );
}